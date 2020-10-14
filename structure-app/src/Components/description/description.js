import React, { Component } from 'react';
import './description.css';

class Description extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {data} = this.props;
        return (
            data ?
            <div className="charEp">
                <div className="contEp">
                    <h2>{data.name}</h2>
                    <span>{data.air_date}</span>
                    <span>{data.episode}</span>
                </div>
            </div>
            : <></>
        );
    }
}

export default Description;
