import { BASE_URL } from '../../constants/urls';
import axios from 'axios';
import { CharacterDetailsText } from './styles';
import { useState } from 'react';

export default function CharacterDetailsPage(props) {
    const [character, setCharacter] = useState({});

    const API_URL = `${BASE_URL}${props.detailsUrl}`;

    const getCharacter = async () => {
        try {
            const result = await axios.get(API_URL);
            const data = result.data;
            setCharacter(data);
        } catch (error) {
            console.log(error);
        }
    };

    getCharacter()


    return (
        <div>
            <h2>{character.name}</h2>
            <button onClick={props.goToListPage}>
                Lista de Personagens
            </button>
            <CharacterDetailsText>
                Details of Character
                <p>{API_URL}</p>
            </CharacterDetailsText>
        </div>
    );
}
