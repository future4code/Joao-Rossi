import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 36pt;
    padding: 1em;
    font-weight: 10px;
`;

const Button = styled.button `
    display: flex;
    width: 20px;
    justify-content: center;
    font-weight: 900;
`

export default function PlaylistCard(props) {
    return <CardContainer>{props.name}<Button> X </Button></CardContainer>;
}
