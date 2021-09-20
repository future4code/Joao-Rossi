import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { InputsContainer, LoginFormContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
import GlobalContext from "../../global/GlobalContext";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();
  const { setters } = useContext(GlobalContext);
  const setRightButton = setters.setRightButtonText;

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, history, setRightButton);
  };

  return (
    <LoginFormContainer>
      <form onSubmit={onSubmitForm}>
        <InputsContainer>
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
        >
          Fazer Login
        </Button>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
