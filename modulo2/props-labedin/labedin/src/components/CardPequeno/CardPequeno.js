import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
          <i class={props.classIcon}></i>
          <h4>{ props.info }:</h4>
          <p>{ props.descricao }</p>
        </div>
    )
}

export default CardPequeno;