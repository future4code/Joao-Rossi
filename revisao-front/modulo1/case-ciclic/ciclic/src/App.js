import styled from 'styled-components'
import Header from './components/Header';
import Form from './components/Form';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Form/>
    </AppContainer>
  );
}

export default App;
