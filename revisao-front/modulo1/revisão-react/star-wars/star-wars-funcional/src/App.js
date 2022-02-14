import { useState } from 'react';
import { AppContainer, ListContainer } from './styles';
import ErrorPage from './assets/ErrorPage';
import CharacterDetailsPage from './pages/CharacterDetailPage';
import CharacterListPage from './pages/CharacterListPage';
import PlanetDetailsPage from './pages/PlanetDetailsPage';

function App() {
    const [currentPage, setCurrentPage] = useState('list');
    const [detailsUrl, setDetailsUrl] = useState('');
    const [planetURL, setPlanetURL] = useState();

    const selectPage = () => {
        switch (currentPage) {
            case 'list':
                return (
                    <CharacterListPage
                        goToDetailsPage={goToDetailsPage}
                        setDetailsUrl={setDetailsUrl}
                    />
                );
            case 'details':
                return (
                    <CharacterDetailsPage
                        planetURL={planetURL}
                        setPlanetURL={setPlanetURL}
                        detailsUrl={detailsUrl}
                        goToListPage={goToListPage}
                        goToPlanetDetails={goToPlanetDetails}
                    />
                );
            case 'planetDetails':
                return (
                    <PlanetDetailsPage
                        planetURL={planetURL}
                        setPlanetURL={setPlanetURL}
                    />
                );
            default:
                return <ErrorPage />;
        }
    };

    const goToDetailsPage = () => {
        setCurrentPage('details');
    };

    const goToListPage = () => {
        setCurrentPage('list');
    };

    const goToPlanetDetails = () => {
        setCurrentPage('planetDetails');
    };

    return (
        <AppContainer>
            <h1>Star Wars</h1>
            <ListContainer>{selectPage()}</ListContainer>
        </AppContainer>
    );
}

export default App;
