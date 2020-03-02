import React from 'react';


function Main(){
    return(
        <div className="main-div">
            <div className="container">
                <div className="main">
                    <h1 className="main-title">General information</h1>
                    <div className="main-title-flex">
                        
                        <ul className="main-title-navigation">
                            <li><a href="https://t.me/mrKrasnov">Telegram</a></li>
                            <li><a href="https://www.linkedin.com/in/yuri-krasnov-9468b019b/">LinkedIn</a></li>
                            <li><a href="https://drive.google.com/file/d/1_SJxqcxWNbeM3iom4I4bVTWsHkcQakEG/view">Summary</a></li>
                        </ul>
                        <div className="main-title-flex-distribution">
                            <p className="main-title-flex-distribution-speciality">
                            Yurii Krasnov <br/>
                            Front-end Developer</p>
                            <p>Date of Birth: June 02, 1999</p>
                            <p>I work on freelance. I was engaged in support <br/>
Cryptocurrency website promotion. Also have experience with VUE</p>
                        </div>
                        <div className="main-title-flex-distribution-speciality-skill">
                            <p className="main-title-flex-distribution-speciality-skill-core">Core skills</p>
                            <p className="main-title-flex-distribution-speciality-skill-core-select">
                                JavaScript <br/>
                                Vue.js <br/>
                                Css3    
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;