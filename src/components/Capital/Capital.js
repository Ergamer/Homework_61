import React, {Component} from 'react';
import './Capital.css';

class Capital extends Component {

    render() {
        return (
            <div className="Capital">
                {this.props.capital ? 'Capital: ' : '' } {this.props.capital}
            </div>
        )
    }
}
export default Capital;