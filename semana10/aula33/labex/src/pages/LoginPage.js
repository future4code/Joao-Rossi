import React, { useEffect, useState } from "react";
import { userHistory } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Setting user:
  const settingEmail = (event) => {
    setEmail(event.target.value);
  };

  // Setting password:
  const settingPassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <input
        placeholder="e-mail"
        type="email"
        value={email}
        onChange={settingEmail()}
      />
      <input
        placeholder="senha"
        type="password"
        value={password}
        onChange={settingPassword()}
      />
    </div>
  );
}
