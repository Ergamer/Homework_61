import React, {Component} from 'react';
import './Population.css';

class Population extends Component {

    render() {
        return (
            <div className="Population">
                {this.props.population ? 'Population: ' : '' } {this.props.population}
            </div>
        )
    }
}
export default Population;