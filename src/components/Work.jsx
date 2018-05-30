import React from 'react';
import graph from './../newplot.jpg';
import myPortfolio from './../myportfolio.jpg';


const Work = () => {
    var divcss = {
        paddingLeft: '20%',
        paddingTop: '20px',
        paddingRight: '3%'
    }
    return (
        <div style={divcss}>
            <div>
                <h1>Sentimental Analysis of RoyalWedding over twitter data using R</h1>
                <a href = "https://github.com/tmukka/MyPortfolio" target="_blank"><img src={graph} alt="graph"/></a>
            </div>
            <div>
                <h1>MyPortfolio made with Reactjs and Hosted over Github Pages</h1>
                <a href = "https://github.com/tmukka/MyPortfolio" target="_blank"><img src={myPortfolio} alt="graph"/></a>
            </div>
        </div>
    );
}

export default Work;