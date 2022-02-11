import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/urls';
import CharacterDetailsPage from '../CharacterDetailPage';
import {
    CharacterListText,
    CharacterCard,
    CharacterListContainer,
} from './styles';

export default function CharacterListPage(props) {
    const { goToDetailsPage, setDetailsUrl } = props;
    const [characterList, setCharacterList] = useState([]);

    const getCharacterList = async () => {
        try {
            const result = await axios.get(`${BASE_URL}/people`);
            const data = result.data.results;
            setCharacterList(data);
        } catch (error) {
            console.log(error);
        }
    };

    getCharacterList();

    const renderList = characterList.map((character, index) => {
        return (
            <CharacterCard
                key={index}
                onClick={() => {
                    setDetailsUrl(
                        `/people/${index + 1}`
                    )
                    goToDetailsPage()
                }}
            >
                {character.name}
            </CharacterCard>
        );
    });

    return (
        <CharacterListContainer>
            <CharacterListText>{renderList}</CharacterListText>
        </CharacterListContainer>
    );
}
