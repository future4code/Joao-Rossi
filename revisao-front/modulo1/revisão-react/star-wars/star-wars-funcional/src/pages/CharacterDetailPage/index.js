import { BASE_URL } from '../../constants/urls';
import axios from 'axios';
import {
    CharacterDetailsText,
    CharacterName,
    CharacterContainer,
} from './styles';
import { useState, useEffect } from 'react';

export default function CharacterDetailsPage(props) {
    const [characterDetails, setCharacterDetails] = useState({});

    useEffect(() => {
        const getCharacterDetails = async () => {
            try {
                const API_URL = `${BASE_URL}${props.detailsUrl}`;
                const result = await axios.get(API_URL);
                setCharacterDetails(result.data);
            } catch (error) {
                console.log(error);
            }
        };
        getCharacterDetails();
    });

    return (
        <CharacterContainer>
            <CharacterName>{characterDetails.name}</CharacterName>
            <CharacterDetailsText></CharacterDetailsText>
            <button onClick={props.goToListPage}>
                Lista de Personagens
            </button>
        </CharacterContainer>
    );
}
