import React from "react";
import styled from "styled-components"; 
import axios from "axios";


const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  align-items: center;
  border-radius: 20%;
  padding: 0 12px;
`;

// Função para resetar os Matches:

export default function AppMenu(props) {

  const ResetMatches = () => {
      axios
        .put(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-filippe/clear"
        )
        .then((response) => {
          console.log(response);
        });
    };

    return (
      <AppBarContainer>
        <button onClick={props.goToProfiles}>Ver Perfis</button>
        <button onClick={ResetMatches}>Resetar os Matches</button>
        <button onClick={props.goToMatches}>Lista</button>        
      </AppBarContainer>
    );
  }

