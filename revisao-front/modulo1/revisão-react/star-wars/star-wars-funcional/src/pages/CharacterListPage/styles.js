import styled from 'styled-components';

export const CharacterListContainer = styled.div`
    display: flex;
    padding: 2em;
`;

export const CharacterListText = styled.h3`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 900;
`;

export const CharacterCard = styled.div`
    border-radius: 5px;
    border-style: double;
    border-color: rgb(100, 80, 120);
    padding: 0%.5em;
    margin: 0.5em;
    &:hover{
        background-color: rgb(180,180,180);
    }
`;
