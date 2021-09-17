import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <Grid container direction='column'>
     <Grid item > <Header /> </Grid> 
     <Grid item> <Card /></Grid>
    </Grid>
  );
}

export default App;
