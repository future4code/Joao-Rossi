import { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    font-size: 36pt;
    padding: 1em;
    font-weight: 10px;
`;

export default function PlaylistCard(props) {
   

    return (
        <CardContainer>
            {props.name}
        </CardContainer>
    );
}
