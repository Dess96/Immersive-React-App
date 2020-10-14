import React, { Component } from 'react';
import Description from '../description/description';
import './episodes.css';

class Episodes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {data} = this.props;
        return (
            data ?
            <div className="eps">
                {
                    data.map(item => <Description data={item} />)
                }
            </div>
            : <></>
        );
    }

}

export default Episodes;