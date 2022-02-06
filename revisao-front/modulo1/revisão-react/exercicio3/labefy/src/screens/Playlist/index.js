import styled from "styled-components";
import { useState } from "react";
import getAllPlaylists from '../../services/getAllPlaylists'
import PlaylistCard from "../../components/PlaylistCard";

const PlaylistContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`


export default function Playlist() {


    return (
        <PlaylistContainer>
            <h1>Aqui estão as suas playlists</h1>
            
            <PlaylistCard/>
        </PlaylistContainer>
    );
}
