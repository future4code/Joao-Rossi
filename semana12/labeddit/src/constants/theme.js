import { createTheme } from "@material-ui/core/styles";
import { primaryColor, secondaryColor } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: 'white'
    },
    secondary: {
      main: secondaryColor,
    },
  },
});

export default theme;
