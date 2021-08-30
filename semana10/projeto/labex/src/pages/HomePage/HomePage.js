import React from 'react'
import { useHistory } from "react-router-dom"
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 16px;
`


const HomePage = () => {
  return <div>
    <PageTitle title={'LabeX'}/>
    <ButtonsContainer>
      <Link to={'/login'}>
        <Button variant={'outlined'} color={'secondary'}>Área do administrador</Button>
      </Link>
      <Link to={'/trips/application'}>
        <Button variant={'contained'} color={'primary'}>Quero me candidatar!</Button>
      </Link>
    </ButtonsContainer>
  </div>
}

export default HomePage