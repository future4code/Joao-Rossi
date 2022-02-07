import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
`;

function Footer() {
    return (
        <FooterContainer>
            <p>Aqui está o footer</p>
        </FooterContainer>
    );
}

export default Footer;
