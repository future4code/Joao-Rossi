import { useState } from 'react';
import { AppContainer } from './styles';
import ErrorPage from './assets/ErrorPage';
import CharacterDetailsPage from './pages/CharacterDetailPage';
import CharacterListPage from './pages/CharacterListPage';

function App() {
    const [currentPage, setCurrentPage] = useState('list');

    const selectPage = () => {
        switch (currentPage) {
            case 'list':
                return <CharacterListPage goToDetailsPage ={goToDetailsPage}/>;
            case 'details':
                return <CharacterDetailsPage />;
            default:
                return <ErrorPage />;
        }
    };

    const goToDetailsPage =()=> {
        setCurrentPage('details')
    }

    return (
        <AppContainer>
          <h1>Star Wars</h1>
          <div>
            {selectPage()}
          </div>
        </AppContainer>
    );
}

export default App;
