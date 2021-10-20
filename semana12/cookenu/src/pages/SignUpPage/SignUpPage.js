import React from "react";

import SignUpForm from './SignUpForm'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

import { ScreenContainer, LogoImage } from "./styled";

import logo from "../../assets/logo.png";




const SignUpPage = () => {
  useUnprotectedPage();
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <SignUpForm />
    </ScreenContainer>
  );
};

export default SignUpPage;