// * CharacterDetailPage

import styled from 'styled-components';

export const CharacterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    background-color: rgba(60, 50, 100, 0.8);
    padding: 2em 2em 1em 2em;
    border-radius: 1.5em;
`;
export const CharacterName = styled.h2`
    display: flex;
    flex-grow: 1;
    font-family: 'Staatliches', sans-serif;
    font-size: 36pt;
    color: white;
    font-weight: 200;
    margin: 0.5em;
`;

export const CharacterDetailsText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    text-shadow: 1em;
    font-family: 'Staatliches', 'Segoe UI', Geneva, Verdana, sans-serif;
    font-size: 2em;
    font-weight: 400;
    margin: 0.5em;
    color: rgb(180, 180, 220);
`;

export const PlanetName = styled.div`
    display: flex;
    flex-grow: 1;
    text-align: center;
    text-shadow: 1em;
    font-family: 'Staatliches', 'Segoe UI', Geneva, Verdana, sans-serif;
    font-size: 1.45em;
    font-weight: 400;
    color: rgb(190, 190, 220);

    :hover {
        cursor: pointer;
        text-shadow: 0 0.25em 0.85em rgb(12, 12, 50);
    }
`;

export const Button = styled.button`
    display: flex;
    flex-grow: 1;
    font-family: 'Staatliches', sans-serif;
    font-size: 14pt;
    max-width: 250px;
    padding: 1em;
    border-radius: 0.75em;
    margin: 1.5em;

    :hover {
        cursor: pointer;
    }
`;
