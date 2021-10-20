import React from "react";
import styled from "styled-components";
import axios from "axios";
import { url, header } from "./axios";


const PlaylistCardContainer = styled.div`
    margin: 10px;
    display: flex;
    background-color: rgb(200,200,200)
    justify-content: flex-start;
`

const NameContainer = styled.p`
    margin-rigth: 10px;
`

const DeleteButton = styled.p`
    color: red;
`

const PlaylistsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class PlaylistManager extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount = () => {
        this.fetchPlaylists()

    }

    fetchPlaylists = () => {
        axios.get(url, header).then(response => {
            this.setState({playlists: response.data.result.list})
        }).catch(err => {
            console.log(err)
        })
    };

    deletePlaylist = (playlistId) => {
        axios.delete(`${url}/${playlistId}`, header).then(response => {
            this.fetchPlaylists()
        }).catch(err => {
            console.log(err)
        });
    };

    

    render () {
      
        const playlistsList = this.state.playlists.map((playlist) => {
            return <li key = {playlist.id}>{playlist.name}</li>
        })
        console.log ({this.state.pla})
        return (
            <PlaylistsContainer>
                {this.playlistsList}
            </PlaylistsContainer>
        )
    };
};

export default PlaylistManager