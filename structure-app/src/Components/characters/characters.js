import React, { Component } from 'react';
//import List from '../list/list';
import './characters.css';

class Characters extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {data} = this.props;
        return (
            <div className="char">
                <ul>
                    {
                        data.map(item => <li key={item.id}>{item.name}</li>)
                    }
                </ul>
            </div>
        );
    }

}

export default Characters;
