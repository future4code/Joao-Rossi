import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/urls';
import {
    CardContainer, CardItem
} from './styles';

export default function CharacterListPage(props) {
    const { goToDetailsPage, setDetailsUrl } = props;
    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        const getCharacterList = async () => {
            try {
                const response = await axios.get(
                    `${BASE_URL}/people/`
                );
                setCharacterList(response.data.results);
            } catch (error) {
                console.log(error);
            }
        };
        getCharacterList();
    }, []);

    const renderList = characterList.map((character, index) => {
        return (
            <CardItem
                key={index}
                onClick={() => {
                    setDetailsUrl(`/people/${index + 1}`);
                    goToDetailsPage();
                }}
            >
                {character.name}
            </CardItem>
        );
    });

    return (
        <CardContainer>
            {renderList}
        </CardContainer>
    );
}
