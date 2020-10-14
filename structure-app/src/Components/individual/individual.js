import React, { Component } from 'react';
//import List from '../list/list';
import './individual.css';

class Individual extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {data} = this.props;
        return (
            data ?
            <div className="char">
                <div className="cont">
                    <h2>{data.name}</h2>
                    <span>{data.status}</span>
                    <span>{data.species}</span>
                    <img src={data.image}></img>
                </div>
            </div>
            : <></>
        );
    }

}

export default Individual;
