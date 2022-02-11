import styled from 'styled-components';


export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100%;
    background-color: rgb(80,80,80);
    align-items: center;

    & h1 {
        display: flex;
        font-family: 'Press Start 2P', cursive;
        justify-content: center;
        margin-top: 3em;
    }
`;

export const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 900px;
    margin: 2em;
`
