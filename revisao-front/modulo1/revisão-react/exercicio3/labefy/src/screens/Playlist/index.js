import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL, axiosConfig } from '../../constants/API';
import PlaylistCard from '../../components/PlaylistCard';

const PlaylistContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export default function Playlist() {
    const [playlists, setPlaylists] = useState([]);

    const getAllPlaylists = async () => {
        try {
            const result = await axios.get(
                `${BASE_URL}/playlists`,
                axiosConfig
            );
            const data = result.data.result.list;
            setPlaylists(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(getAllPlaylists);

    const renderPlaylists = playlists.map((playlist) => {
        return (
            <PlaylistCard key={playlist.id} name={playlist.name} />
        );
    });

    return <PlaylistContainer>{renderPlaylists}</PlaylistContainer>;
}
