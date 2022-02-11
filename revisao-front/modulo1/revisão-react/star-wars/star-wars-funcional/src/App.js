import { useState } from 'react';
import { AppContainer } from './styles';
import ErrorPage from './assets/ErrorPage';
import CharacterDetailsPage from './pages/CharacterDetailPage';
import CharacterListPage from './pages/CharacterListPage';

function App() {
    const [currentPage, setCurrentPage] = useState('list');
    const [detailsUrl, setDetailsUrl] = useState('')

    const selectPage = () => {
        switch (currentPage) {
            case 'list':
                return <CharacterListPage goToDetailsPage = {goToDetailsPage} setDetailsUrl ={setDetailsUrl} />;
            case 'details':
                return <CharacterDetailsPage detailsUrl = {detailsUrl} goToListPage={goToListPage} />;
            default:
                return <ErrorPage />;
        }
    };

    const goToDetailsPage = () => {
        setCurrentPage('details')
    }

    const goToListPage = () => {
        setCurrentPage('list')
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
