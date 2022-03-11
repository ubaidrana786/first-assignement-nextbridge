import "./App.css";
import { Header } from "./components/UI/Header";
// import { Footer } from "./components/Footer";
import Movies from "./components/movies";
import { Login } from "./components/Authentication/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SignUp } from "./components/Authentication/SignUp/SignUp";
import RootContext  from "./RootContext";
import ProtecedRoutes from "./ProtectedRoutes";

function App() {
  return (
     <RootContext>
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
     </RootContext>
  );
}

export default App;
