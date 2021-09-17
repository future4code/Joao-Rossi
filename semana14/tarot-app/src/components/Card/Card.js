import { useState } from "react";
import {
  data,
  baseImagesUrl,
  imageBackCard,
  cards,
} from "../../constants/data";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// Estilização:
const CardContainer = styled.div`
  display: grid;
  width: 300px;
  grid-template-rows: 400px 100px 50px;
  box-shadow: 0 0.5em 1em black;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-radius:10px;
`;

const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

// Funções que serão usadas:

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

function CardFront() {
  const [cardName, setCardName] = useState(" ");
  const [cardImageUrl, setCardImageUrl] = useState(imageBackCard);
  const [buttonText, setButtonText] = useState("Tirar uma Carta");
  const [cardList, setCardList] = useState([]);

  const getACard = () => {
    const numberCard = getRandomInt(0, 77);
    setCardName(cards[numberCard].name);
    setCardImageUrl(baseImagesUrl + cards[numberCard].image);
    setCardList([...cardList, numberCard]);
    setButtonText("Tirar outra Carta");
    console.log(cardList);
  };

  return (
    <CardContainer>
      <ImgContainer>
        <img src={cardImageUrl} alt="carta selecionada" />
      </ImgContainer>

      <Typography variant="h6" align="center">
        {cardName}
      </Typography>
      <Button onClick={getACard}>{buttonText}</Button>
    </CardContainer>
  );
}

export default CardFront;
