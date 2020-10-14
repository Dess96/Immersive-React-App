import React, { Component } from 'react';
import './home.css';
import Hero from '../Components/hero/hero';
import Characters from '../Components/characters/characters';
import Episodes from '../Components/episodes/episodes'
import Button from '../Components/button/button';

import rmChar from '../Data/rmChar.json';
import rmEps from '../Data/rmEps.json';
import rmEps2 from '../Data/rmEps2.json';
import rmEps3 from '../Data/rmEps3.json';

const getInformation = (list) => list.results;

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Hero />
                <Characters data={getInformation(rmChar)}/>
                <div className="buttonDiv">
                    <Button data={getInformation(rmEps)} title={'Season 1'}/>
                    <Button data={getInformation(rmEps2)} title={'Season 2'}/>
                    <Button data={getInformation(rmEps3)} title={'Season 3'}/>
                </div>
            </div>
        );
    }

}

export default Home;