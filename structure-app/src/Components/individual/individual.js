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
                    <div className="imgDiv">
                        <img src={data.image} />
                    </div>
                    <div className="spanDiv">
                        <span>{data.status}</span>
                        <span>{data.species}</span>
                    </div>
                </div>
            </div>
            : <></>
        );
    }

}

export default Individual;
