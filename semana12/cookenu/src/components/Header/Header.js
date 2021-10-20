import React, { useContext  } from "react";
import { useHistory } from "react-router-dom";

import { goToLogin, goToRecipesList } from "../../routes/coordinator.js";
import GlobalContext from "../../global/GlobalContext";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

import { StyledToolbar } from "./styled";

const Header = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const  { state , setters } = useContext(GlobalContext)

  const logout = () => {
    localStorage.removeItem("token");
  };

  function rightButtonAction (history) {
    if (token) {
      logout();
      goToLogin(history);
      setters.setRightButtonText('Login')
    } else {
      goToLogin(history);
    }
  };

  
  return (
    <div>
      <AppBar position="static">
        <StyledToolbar>
          <Button color="inherit" onClick={() => goToRecipesList(history)}>
            Cookenu
          </Button>
          <Button color="inherit" onClick={()=> rightButtonAction(history)}>
            {state.rightButtonText}
          </Button>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default Header;
