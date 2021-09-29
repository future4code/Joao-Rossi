import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header"
const App = () => {
  return (
    <GlobalState>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </GlobalState>
  );
};

export default App;
