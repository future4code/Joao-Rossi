import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL, axiosConfig } from '../../constants/API';
import PlaylistCard from '../../components/PlaylistCard';

const PlaylistContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Playlist() {
    const [playlists, setPlaylists] = useState(['playlists']);

    const getAllPlaylists = async () => {
        try {
            const result = await axios.get(
                `${BASE_URL}/playlists`,
                axiosConfig
            );
            setPlaylists(result.data.result.list)
            return result.data.result.list;
        } catch (error) {
            console.log(error);
        }
    };

    const onClickAction = async () => {
        const list =  await getAllPlaylists();
    };

    const renderPlaylists = playlists.map((playlist)=><PlaylistCard key ={playlist.id} name = {playlists.name}/>)
    

    return (
        <PlaylistContainer>
            <h1>Aqui estão as suas playlists</h1>
            {renderPlaylists}
            <button onClick={onClickAction}>
                Requisitar as Playlists
            </button>
        </PlaylistContainer>
    );
}
