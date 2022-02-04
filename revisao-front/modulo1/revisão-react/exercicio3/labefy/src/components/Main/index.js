import {useState} from 'react'

import NewPlaylist from "../../screens/NewPlaylist";
import Playlist from "../../screens/Playlist";
import Welcome from '../../screens/Welcome';

export default function Main() {
    const [currentScreen, setCurrentScreen] = useState(<Welcome/>)

    const changeToNewPlaylist = () => {
        setCurrentScreen(<NewPlaylist/>)
    }
    const changeToPlaylist = () => {
        setCurrentScreen(<Playlist/>)
    }


    return (
        <div>
            {currentScreen}
        <button onClick={changeToNewPlaylist}>Criar Nova Playlist</button>
        <button onClick={changeToPlaylist}>Ver As Playlist</button>
        </div>
    );
}
