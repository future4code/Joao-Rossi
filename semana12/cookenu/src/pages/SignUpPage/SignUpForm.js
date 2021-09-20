import React from "react";
import { InputsContainer, SignUpFormContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { useHistory } from "react-router-dom";

const SignUpForm = ({ setRightButtonText }) => {
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, history)
  };

  return (
    <SignUpFormContainer>
      <form onSubmit={onSubmitForm}>
        <InputsContainer>
        <TextField
            value={form.name}
            name={'name'}
            onChange={onChange}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
        </InputsContainer>
        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >Fazer Cadastro
        </Button>
      </form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
