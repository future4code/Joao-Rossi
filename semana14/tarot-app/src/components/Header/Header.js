import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const HeaderContainter = styled.div`
  display: flex;
  background-color: red;
  justify-content: center;
  font-size: 3em;
`;

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">Tarot Game</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
