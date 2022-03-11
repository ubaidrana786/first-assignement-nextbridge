import "./App.css";
import { Header } from "./components/UI/Header";
// import { Footer } from "./components/Footer";
import Movies from "./components/movies";
import { Login } from "./components/Authentication/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SignUp } from "./components/Authentication/SignUp/SignUp";
import Contex from "./Contex/RootContex";
import ProtecedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Contex>
    <Router>
      <Header />
      <Switch>
        <ProtecedRoutes exact path="/">
          <Movies />
        </ProtecedRoutes>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
    </Contex>
  );
}

export default App;
