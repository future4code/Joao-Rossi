import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContainer>
        <Card />
      </MainContainer>
    </AppContainer>
  );
}

export default App;
