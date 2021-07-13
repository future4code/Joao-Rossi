import React from 'react';
import Styled from 'styled-components';
import './CardPequeno.css';

.smallcard-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: auto;
}

.smallcard-container > img {
    width: 40px;
    margin-right: 100px;
    border-radius: 100%;
}

.smallcard-container h4 {
    margin-bottom: 15px;
}

.smallcard-container > div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}


function CardGrande(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.informacao }</h4>
                <p>{ props.texto }</p>
            </div>
        </div>
    )
}

export default CardGrande;