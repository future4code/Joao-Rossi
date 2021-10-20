import React from "react";
import styled from "styled-components";
import axios from "axios";
import {url, header} from "./axios"

const ContainterPlaylistCreator = styled.div `
    display: flex;
    flex-direction: column;
`

const ContainerInputButton = styled.div `
    display: flex;
`

const Input = styled.input `
    width: 300px;
`



export default class PlaylistCreator extends React.Component {
    
    state = {
        inputPlaylistName: '',
    }

    changeInputPlaylistName = (e) => {this.setState({inputPlaylistName: e.target.value})};

    createPlaylist = () => {

        const body = {
            name: this.state.inputPlaylistName
        };

        axios.post (url, body, header)
        .then((response) => {
            console.log(response.data)
        })
        .catch ((err) => {
            console.log(err.response.data)
        })

    };

    
    
    render () {

        return (
            <ContainterPlaylistCreator>
                <ContainerInputButton>
                    <Input 
                    
                    placeholder = 'Digite o nome de sua playlist'
                    value = {this.state.inputPlaylistName}
                    onChange = {this.changeInputPlaylistName}

                    />

                <button onClick={this.createPlaylist}>Enviar</button>
                </ContainerInputButton>
            </ContainterPlaylistCreator>
        )
    }
}