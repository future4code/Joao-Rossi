import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    background-color: rgb(150, 150, 200);
    width: 8.725em;
    height: 8.725em;
    border-radius: 0.85em;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1.725em;
    margin: 0.5em;
`;

const Text = styled.div`
    text-align: center;
    font-size: 20pt;
    font-weight: 1200;
`;

const Button = styled.button`
    display: flex;
    background-color: rgba(0, 0, 0, 0);
    width: 20px;
    justify-content: center;
    font-weight: 900;
`;

export default function PlaylistCard(props) {
    return (
        <CardContainer>
            <Text>{props.name}</Text>
            <Button> ❌ </Button>
        </CardContainer>
    );
}
