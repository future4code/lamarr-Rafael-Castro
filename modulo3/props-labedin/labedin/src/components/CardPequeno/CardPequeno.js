import React from 'react';
import './CardPequeno.css'

function CardPequeno(props){
    return (
        <div className='smallcard-container'>
            <img src={props.image}/>
            <p className='bold-text'>{props.title}</p>
            <p>{props.text}</p>
        </div>
    )
}

export default CardPequeno;