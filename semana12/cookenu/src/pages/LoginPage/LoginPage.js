import React from "react";
import { useHistory } from "react-router-dom";

import LoginForm from "./LoginForm";
import { goToSignUp } from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled";

import logo from "../../assets/logo.png";
import Button from "@material-ui/core/Button";



const LoginPage = ({ }) => {
  useUnprotectedPage();
  const history = useHistory();
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
        >
          Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
