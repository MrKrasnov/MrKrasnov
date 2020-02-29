import React from 'react';

function Other(){
    return(
        <div>
            <div className="container">
            <h1 className="other">Other</h1>
            <div className="other-flex">
                <div className="other-flex-skill"> 
                    <ul><h2>Skill:</h2>
                        <li>HTML, CSS3</li>
                        <li>Gulp, SASS</li>
                        <li className="other-flex-down">
                        JavaScript - ES5+
                        </li>
                        <li>Vue.js -basics, work with components, vue-router.</li>
                        <li className="other-flex-down">
                        React.js - Basics, work with JSX and properties.
                        </li>
                        <li>
                        Node.js - general understanding.
                        </li>
                        <li>
                        PHP - work with the database, used orm redbean.
                        </li>
                    </ul>
                </div>
                <div className="other-flex-skill-education">
                    <h2>Specialized education:</h2>
                    <p>Odessa College of Computer Technology, 2015–2019, <br/>
                    <span>specialty:</span> technician constructor (junior specialist)
                    </p>
                    <div>
                        <h3>This site was developed by React.js</h3>
                        <a href="https://github.com/MrKrasnov/MrKrasnov">GitHub repository</a>    
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Other;