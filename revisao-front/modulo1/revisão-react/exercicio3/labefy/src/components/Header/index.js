import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    widht:500px;
    padding: 1em;
    justify-content: space-between;
    background: rgb(200, 200, 200);
`;

export default function Header(props) {
    const onClickSetter = (e) => {
        props.setCurrentScreen(e.target.value);
    };

    return (
        <HeaderContainer>
            <button value="welcome" onClick={onClickSetter}>
                Logo
            </button>
            <button value="new" onClick={onClickSetter}>
                Criar Nova Playlist
            </button>
            <button value="all" onClick={onClickSetter}>
                Ver As Playlist
            </button>
        </HeaderContainer>
    );
}
