import React from 'react';
//connect img
import WebStudio from '../../img/portfolio/WebStudio.JPG';
import Vue from '../../img/portfolio/vue.jpg';
import APPTANK from '../../img/portfolio/APPTANK.JPG';
import Game from '../../img/portfolio/Game.JPG';
import Description from './Description';
function Portfolio(){
    return(
        <div className="portfolio">
            <div className="container">
                <h1 className="portfolio-title">Portfolio</h1>
                <div className="portfolio-title-grid">
                    <div><img src={WebStudio} alt=""/>
                        <Description 
                            link={'https://github.com/MrKrasnov/WebDen'}
                            heroku={<a href="https://fathomless-mountain-35282.herokuapp.com">Link</a>}
                            title={"Landing page on React.js, also used BLL and props"}
                            />
                    </div>
                    <div><img src={Vue} alt=""/>
                        <Description 
                            link={'https://github.com/MrKrasnov/frontendvuejs'}
                            title={"Data filter on vue.js. For data used the JSON format"}
                        />
                    </div>
                    <div><img src={APPTANK} alt=""/>
                        <Description 
                            link={'https://github.com/MrKrasnov/TANKAPP'}
                            title={'Website development from a PSD source'}
                            />    
                    </div>
                    <div><img src={Game} alt=""/>
                        <Description 
                            link={'https://github.com/MrKrasnov/criptGAME.github.io'}
                            heroku={<a href="https://mrkrasnov.github.io/criptGAME.github.io">Link</a>}
                            title={'Javascript browser game. Browser interaction'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;