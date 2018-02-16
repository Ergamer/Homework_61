import React, { Component } from 'react';
import './App.css';
import LandsList from "./components/LandsList/LandsList";
import LandsTable from "./components/LandsTable/LandsTable";
import axios from 'axios';


class App extends Component {

    state = {
        countries: [],
        alphaCode: [],
        borderCountries: [],
        countryInfo: {}
    };

    componentDidMount() {
        const BASE_URL = 'https://restcountries.eu/rest/v2/all?fields=name;borders;capital;population;flag';
        axios.get(BASE_URL).then(response => {
            this.setState({countries: response.data})
        })
    }

    clickedCountry = (name) => {
        const index = this.state.countries.findIndex(country => country.name === name);
        const findCountry = this.state.countries[index];
        this.setState({countryInfo: {capital: findCountry.capital, population: findCountry.population, flag: findCountry.flag}});
            Promise.all(this.state.countries[index].borders.map(code => {
                return axios.get('https://restcountries.eu/rest/v2/alpha/' + code).then(resp => {
                    console.log(resp.data.name);
                    return resp.data.name
                });
            })).then(response => {
                console.log(response);
            this.setState({borderCountries: response})
            });
    };

  render() {
    return (
      <div className="App">
       <LandsList countries={this.state.countries} clickedCountry={this.clickedCountry}/>
          <LandsTable borderCountries={this.state.borderCountries}
                      capital={this.state.countryInfo.capital}
                      population={this.state.countryInfo.population}
                      countryFlag={this.state.countryInfo.flag}
          />
      </div>
    );
  }
}

export default App;
