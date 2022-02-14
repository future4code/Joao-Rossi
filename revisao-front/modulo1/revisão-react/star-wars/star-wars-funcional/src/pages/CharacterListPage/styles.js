import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const CardItem = styled.p`
    text-align: center;
    background-color: rgb(100, 100, 120);
    border-radius:0.45em;
    margin: 1em;
    padding: 2em 0 2em 0;
    width: 9em;
    font-family: 'Staatliches', sans-serif;
    font-size: 1.25em;

    :hover {
        background: rgb(120, 80, 110);
        cursor: pointer;
    }
`;
