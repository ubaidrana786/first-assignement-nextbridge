import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Movies from "./components/movies";
import { Login } from "./components/Authentication/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SignUp } from "./components/Authentication/SignUp/SignUp";
import Contex from "./components/Contex/RootContex";

function App() {
  return (
    <Contex>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
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
