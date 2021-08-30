import React, { useEffect, useState } from "react";
import { userHistory } from "react-router-dom";
import { useForms } from "../hooks/UseForms";

export default function LoginPage() {
  const onSubmit = (event) => {
    event.preventDefault();
    const urlLogin =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/joaofilippe/login";
    axios
      .put(urlLogin, form)
      .then((response) => {
        console.log("Deu certo: ", response.data.token);
        localStorage.setItem("token", response.data.token);
        history.push("/");
      })
      .catch((error) => {
        console.log("Deu errado: ", error.response);
      });
  };

  const { form, onChange, cleanFields } = useForm({
    nome: "",
    email: ""
  });
  
  return (
    <div>
      <h1>LoginPage</h1>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          placeholder="e-mail"
          type="email"
          value={email}
          onChange={settingEmail()}
        />
        <input
          name="password"
          placeholder="senha"
          type="password"
          value={password}
          onChange={settingPassword()}
        />
        <button>Fazer Login</button>
      </form>
    </div>
  );
}
