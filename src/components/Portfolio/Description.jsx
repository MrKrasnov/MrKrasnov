import React from 'react';

function Description(props){
    return(
        <div>
            <p>{props.title}</p>
            <div className="portfolio-title-grid-link">
                <a href={props.link}>Git Hub</a>
                {props.heroku}
            </div>
        </div>
    )
}

export default Description