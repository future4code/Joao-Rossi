import { useState } from 'react';
import styled from 'styled-components';

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
    const [valorMensalidade, setValorMensalidade] = useState(0);

    const handleChange = (e) => {
        const value = Number(e.target.value);
        setValorMensalidade(value);
        console.log(valorMensalidade);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Você enviou o valor: ${valorMensalidade}`);
    };

    return (
        <FormContainer>
            <Forms onSubmit={handleSubmit}>
                <label>
                    Valor da Mensalidade:
                    <input
                        type="text"
                        name="valor-mensalidade"
                        value={valorMensalidade}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Enviar" />
            </Forms>
        </FormContainer>
    );
};

export default Form;
