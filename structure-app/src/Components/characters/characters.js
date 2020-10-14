import React, { Component } from 'react';
import Individual from '../individual/individual';
import './characters.css';

class Characters extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {data} = this.props;
        return (
            <div className="chars">
                
                {
                    data.map(item => <Individual data={item} />)
                }
            </div>
        );
    }

}

export default Characters;
