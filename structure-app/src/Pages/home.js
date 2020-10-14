import React, { Component } from 'react';
import './home.css';
import Hero from '../Components/hero/hero';
import Description from '../Components/description/description';
import Characters from '../Components/characters/characters';

import rmChar from '../Data/rmChar.json';

const getCharacters = (list) => list.results;

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Hero />
                <Description />
                <Characters data={getCharacters(rmChar)}/>
            </div>
        );
    }

}

export default Home;