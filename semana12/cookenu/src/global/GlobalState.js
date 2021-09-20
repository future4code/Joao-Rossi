import { useState } from "react";
import GlobalContext from "./GlobalContext";

export default function GlobalState(props) {
  const token = localStorage.getItem("token");

  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );

  const state = { rightButtonText };
  const setters = { setRightButtonText };
  const requests = {};

  return (
    <GlobalContext.Provider
      value={{
        state,
        setters,
        requests,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
