import React, { Component } from 'react';
import './button.css';
import Episodes from '../episodes/episodes';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: null
        }
    }

    link(item) {
        this.setState({
            selectedItem: item,
        });
    }

    render() {
        var {data} = this.props;
        var {title} = this.props;
        return (
            data ?
            <div>
                {
                    <button onClick={() => this.link(data)}>{title}</button>
                }
                <Episodes data={this.state.selectedItem} />
            </div>
             : <></>
        );
    }
}


export default Button;