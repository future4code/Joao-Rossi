import { useState, useEffect } from 'react';
import styled from 'styled-components';

import getAllPlaylists from '../../services/getAllPlaylists';

const CardContainer = styled.div`
    font-size: 36pt;
    padding: 1em;
    font-weight: 10px;
`;

export default function PlaylistCard() {
    
    return (
        <CardContainer>
            Card das Playlists
        </CardContainer>
    );
}
