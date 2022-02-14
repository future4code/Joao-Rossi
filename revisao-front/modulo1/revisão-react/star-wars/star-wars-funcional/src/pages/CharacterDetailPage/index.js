import { BASE_URL } from '../../constants/urls';
import axios from 'axios';
import {
    CharacterDetailsText,
    CharacterName,
    CharacterContainer,
    Button,
    PlanetName,
} from './styles';
import { useState, useEffect } from 'react';

export default function CharacterDetailsPage(props) {
    const [characterDetails, setCharacterDetails] = useState('Carregando');
    const [planetDetails, setPlanetDetails] = useState('Carregando');

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

        const getPlanetDetails = async () => {
            try {
                const result = await axios.get(props.planetURL);
                setPlanetDetails(result.data);
            } catch (error) {
                console.log(error);
            }
        };

        getPlanetDetails();
    });

    return (
        <CharacterContainer>
            <CharacterName>{characterDetails.name}</CharacterName>
            <CharacterDetailsText>
                Planeta de origem:
                <PlanetName onClick={props.goToPlanetDetails}>{planetDetails.name}</PlanetName>
            </CharacterDetailsText>
            <Button onClick={props.goToListPage}>Lista de Personagens</Button>
        </CharacterContainer>
    );
}
