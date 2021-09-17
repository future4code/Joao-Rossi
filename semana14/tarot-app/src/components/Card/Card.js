import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// Estilização:
const CardContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2em;
  
`

const Card = styled.div `
  display: grid;
  grid-template-rows: 300px 1fr 1fr;
  box-shadow: 0 0.5em 1em black;
  align-items: center;
`

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

function CardFront() {
  const [cardName, setCardName] = useState("Nome da Carta");
  const [cardImageUrl, setCardImageUrl] = useState(imageBackCard);

  const getACard = () => {
    const numberCard = getRandomInt(0, 77);
    console.log(numberCard);
    setCardName(cards[numberCard].name);
    setCardImageUrl(baseImagesUrl + cards[numberCard].image);
  };

  return (
    <CardContainer>
      <Card>
        <img
          src={cardImageUrl}
          alt="carta selecionada"
        />
      </Card>
      <Typography variant='body1' ml={2}>{cardName}</Typography>
      <Button onClick={getACard}>Tirar uma carta</Button>
    </CardContainer>
  );
}

export default CardFront;