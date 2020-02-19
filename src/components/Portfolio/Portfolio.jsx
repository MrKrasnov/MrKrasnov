import React from 'react';
//connect img
import WebStudio from '../../img/portfolio/WebStudio.JPG';
import Vue from '../../img/portfolio/vue.jpg';
import APPTANK from '../../img/portfolio/APPTANK.JPG';
import Game from '../../img/portfolio/Game.JPG';
function Portfolio(){
    return(
        <div className="portfolio">
            <div className="container">
                <h1 className="portfolio-title">Portfolio</h1>
                <div className="portfolio-title-grid">
                    <div><img src={WebStudio} alt=""/>
                        
                    </div>
                    <div><img src={Vue} alt=""/></div>
                    <div><img src={APPTANK} alt=""/></div>
                    <div><img src={Game} alt=""/></div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;