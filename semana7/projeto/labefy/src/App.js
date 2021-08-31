import React from "react";
import styled from "styled-components";
import PlaylistCreator from "./components/PlaylistCreator";
import PlaylistManager from "./components/PlaylistManager"


const Container = styled.body `
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
`

const ContainterPlaylist = styled.div `
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100vh;
  background-color: #2c4d5e;
`

const ContainerManager = styled.div `
  display: flex;
`

const ContainerMain = styled.div `
  display: flex;
`

class App extends React.Component {
  
  render () {

  return (
    <Container>
      <ContainerMain>
        <ContainterPlaylist>
          <PlaylistCreator />
          <PlaylistManager />
        </ContainterPlaylist>
        <ContainerManager>
          Espaço que irá mudar
          <p>Adicionar Músicas</p>
          <p>Adicionar Playlist</p>
        </ContainerManager>
      </ContainerMain>
    </Container>
  );
}
}

export default App;
