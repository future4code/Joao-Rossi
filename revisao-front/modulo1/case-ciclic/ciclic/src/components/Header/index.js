import styled from 'styled-components';

const HeaderContainter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(50, 255, 160);

    & h2 {
        display: flex;
        justify-content: center;
        font-family: 'Hind Madurai', sans-serif;
        font-size: 2.5em;
    }
`;

const HomeButton = styled.p`
    padding-left: 1em;
    font-weight: 900;
    font-family: 'Oxygen', sans-serif;
    font-size: 1.25em;
    width: 5em;

    :hover {
        text-shadow: 0 -3px 10px rgb(0, 100, 90);
        cursor: pointer;
    }
`;

const About = styled.div`
    font-family: 'Oxygen', sans-serif;
    font-weight: 900;
    font-size: 1.25em;
    width: 5em;

    :hover {
        text-shadow: 0 -3px 10px rgb(0, 100, 90);
        cursor: pointer;
    }
`;

export default function Header() {
    return (
        <HeaderContainter>
            <HomeButton>Inicio</HomeButton>
            <h2>Ciclic</h2>
            <About>Sobre</About>
        </HeaderContainter>
    );
}
