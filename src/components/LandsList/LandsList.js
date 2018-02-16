import React, {Component} from 'react';
import './LandsList.css';
import axios from 'axios'


class LandsList extends Component {



    render() {
        return (
            <div className="LandsList">
                {this.props.countries.map((country) => {
                    return <p onClick={() => this.props.clickedCountry(country.name)}>{country.name}</p>
                }
                )}

            </div>
        )
    }
}
export default LandsList;