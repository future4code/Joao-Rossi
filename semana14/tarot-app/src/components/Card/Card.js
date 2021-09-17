import React from 'react';

// Requerimento de dados:
const data = require("../../assets/tarot.json");

const baseImagesUrl = data.imagesUrl;

const imageBackCard = data.imageBackCard;

const cards = data.cards;


// Funções que serão usadas:

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};


export default function Card(){

    return (
        <div>
            <h1> Card </h1>
            <div>
                <p>Imagem</p>
                <p>Nome da Carta</p>
                <button>Escolher outra carta</button>
            </div>
        </div>
    )

}