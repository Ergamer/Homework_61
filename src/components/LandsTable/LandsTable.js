import React, {Component} from 'react';
import './LandsTable.css';
import Capital from "../../components/Capital/Capital"
import Population from "../../components/Population/Population"
import Borders from "../../components/Borders/Borders"

class LandsTable extends Component {

    render() {
        return (
            <div className="LandsTable">
                <Capital capital={this.props.capital}/>
                <Population population={this.props.population}/>
                <Borders borderCountries={this.props.borderCountries}/>
                <img src={this.props.countryFlag} alt=""/>
            </div>
        )
    }
}
export default LandsTable;