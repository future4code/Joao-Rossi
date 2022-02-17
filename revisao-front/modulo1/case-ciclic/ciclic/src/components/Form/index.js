import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import { BASIC_URL, Header } from '../../constants/API';

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: rgb(250, 250, 250);
    padding: 0 3em 0 3em;
    height: 100%;
`;

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    & label {
        font-family: 'Hind Madurai', sans-serif;
        font-size: 16pt;
        padding-right: 2em;
        margin-right: 1em;
    }

    & input {
        margin: 2em;
        padding: 0.5em;
        border-radius: 0.75em;
        font-family: 'Hind Madurai', sans-serif;
        font-size: 14pt;
    }
`;

const Form = () => {
    const [mensalidade, setMensalidade] = useState(0);
    const [taxa, setTaxa] = useState(0);
    const [tempo, setTempo] = useState(0);

    const handleChangeMensalidade = (e) => {
        const value = Number(e.target.value);
        setMensalidade(value);
    };
    const handleChangeTaxa = (e) => {
        const value = Number(e.target.value);
        const valueFix = value/100
        setTaxa(valueFix);
    };
    const handleChangeTempo = (e) => {
        const value = Number(e.target.value);
        setTempo(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //[valor da mensalidade * (((1 + [taxa de juros]) ^ [tempo de contribuicao em meses] - 1) / [taxa de juros])
        const expr = `${mensalidade} * (((1+ ${taxa}) ^ ${tempo} - 1 ) / ${taxa})`;
        const body = {
            expr,
        };

        try {
            const res = await axios.post(BASIC_URL, body);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <FormContainer>
            <Forms onSubmit={handleSubmit}>
                <label>
                    Valor da Mensalidade:
                    <input
                        type="text"
                        name="valor-mensalidade"
                        value={mensalidade}
                        onChange={handleChangeMensalidade}
                    />
                </label>
                <label>
                    Taxa de Juros:
                    <input
                        type="text"
                        name="taxa-juros"
                        value={taxa}
                        onChange={handleChangeTaxa}
                    />
                </label>
                <label>
                    Tempo de Contribuição:
                    <input
                        type="text"
                        name="tempo-contribuicao"
                        value={tempo}
                        onChange={handleChangeTempo}
                    />
                </label>
                <input type="submit" value="Enviar" />
            </Forms>
        </FormContainer>
    );
};

export default Form;
