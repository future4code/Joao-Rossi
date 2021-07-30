import React from 'react';
import TelaCriarPlaylist from './components/CriarPlaylist';

class App extends React.Component {
    
  state = {
    telaAtual: "inicio"
  }

  telaCriarPlaylist = () => {
    switch (this.state.telaAtual){
      case "inicio":
        return <div>Tela Inicial</div>
      case "criar":
        return <TelaCriarPlaylist />
    }
  }
  
  render() {
    return (
      <div>
      {this.telaCriarPlaylist()}
      </div>
    )
  }
}

export default App;
