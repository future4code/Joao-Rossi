import styled from "styled-components";

const WelcomeContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`

export default function Welcome() {
    return (
        <WelcomeContainer>
            <h1>BEM-VINDO</h1>
            <h3>LABEFY</h3>
        </WelcomeContainer>
    );
}