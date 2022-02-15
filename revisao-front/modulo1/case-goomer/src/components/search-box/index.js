import styled from 'styled-components';

export const SearchBoxContainer = styled.div`
    height: 10vh;
`;

export const SearchBox = ({ onChange, value }) => {

    return <SearchBoxContainer>
        <input value={value} onChange={onChange}/>
    </SearchBoxContainer>
}