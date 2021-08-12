import React from 'react';
import styled from 'styled-components'

const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: auto;`

const SmallCardImg = styled.img`
    width: 40px;
    margin-right: 100px;
    border-radius: 100%;`


const SmallCardh4 = styled.h4`
    margin-bottom: 15px;
    `


const SmallCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    `


function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <SmallCardImg
            src={
                props.imagem
            } 
            />
            <SmallCardh4>
                {
                props.informacao
                }
            </SmallCardh4>
            <p>
                {
                props.texto
                }   
            </p>
        </SmallCardContainer>
    )
}

export default CardPequeno;