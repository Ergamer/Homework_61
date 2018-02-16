import React, {Component} from 'react';
import './Borders.css';

class Borders extends Component {

    render() {
        return (
            <div className="Borders">
                {this.props.borderCountries.map((border) => {
                        return <p>{border}</p>
                    }
                )}
            </div>
        )
    }
}
export default Borders;