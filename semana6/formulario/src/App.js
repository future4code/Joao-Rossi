
import './App.css';
import styled from 'styled-components';
import DadosGerais from './components/Etapa1.js'

const Cabecalho = styled.h1 `
  display: flex;
  justify-content: center;
  font-family: Segoe UI;
`


function App() {
  return (
    <div>
      <Cabecalho>
        Formulário
      </Cabecalho>
      <DadosGerais/>
    </div>

    
  );
}

export default App;
