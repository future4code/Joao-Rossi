import React from 'react';
import styled from 'styled-components';

const AskTitle = styled.div `
    display: flex;
    font-size: 14pt;
    justify-content: center;
    font-family: 'Helvetica Neue';
    font-weight: bold;
`

const InputBox = styled.div `
    display: flex;
    justify-content: center;
    padding: 2em;    
`

class DadosGerais extends React.Component {
    
    state = {
        nome: '',
        
    }

    render() {
        return (
            <div>

                <AskTitle>
                    1. Qual o seu nome completo?
                </AskTitle>
                <InputBox>
                <input></input>
                </InputBox>

            </div>
        )
    
    }
};

export default DadosGerais;