import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BASE_URL, axiosConfig } from '../../constants/API';

const NewPlaylistContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NewPlaylistForm = styled.form`
    height: 100px;
    width: 15em;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`;

export default function NewPlaylist() {
    const [playlistName, setPlaylistName] = useState('');

    const newPlaylist = (e) => {
        e.preventDefault();
        const body = {
            name: playlistName
        };

        axios
            .post(`${BASE_URL}/playlists`, body, axiosConfig)
            .then(() => {
                alert('Playlist cadastrada com sucesso');
            })
            .catch((err) => [console.log(err)]);
        setPlaylistName('');
    };

    const onChangeAction = (e) => setPlaylistName(e.target.value);

    return (
        <NewPlaylistContainer onSubmit={newPlaylist}>
            <h1>Cadastrar uma Nova Playlist</h1>
            <NewPlaylistForm>
                <label>Nome da Playlist:</label>
                <input
                    placeholder="Digite o nome aqui"
                    type="text"
                    value={playlistName}
                    onChange={onChangeAction}
                />
                <button type="submit">Cadastrar</button>
            </NewPlaylistForm>
        </NewPlaylistContainer>
    );
}
