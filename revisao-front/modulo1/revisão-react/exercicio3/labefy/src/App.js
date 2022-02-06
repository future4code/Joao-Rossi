import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './screens/Welcome'
import Playlist from './screens/Playlist'
import NewPlaylist from './screens/NewPlaylist'

import styled from 'styled-components';
import { useState } from 'react';

export const AppContainer = styled.div`
background-color: rgb(150,150,100);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

function App() {
    const [currentScreen, setCurrentScreen] = useState('welcome');

    const changeScreen = () => {
        if (currentScreen === 'welcome'){
            return <Welcome />
        } else if (currentScreen === 'new'){
            return <NewPlaylist />
        } else if (currentScreen === 'all') {
            return <Playlist/>
        } else {
            return "error"
        }
    }

    return (
        <AppContainer>
            <Header setCurrentScreen={setCurrentScreen} />
            {changeScreen()}
            <Footer />
        </AppContainer>
    );
}

export default App;
