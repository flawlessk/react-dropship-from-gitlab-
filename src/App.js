import Nav from "./components/Nav";
import Main from "./components/Main";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Nav />
      <Switch>
        <Route exact path="/catalog/:categoryParams">
          <Main />
        </Route>
        <Route path="/cart">
          hello world
        </Route>
        <Route path="/dashboard">
          awdwadawd
        </Route>
      </ Switch>
    </>
  );
}

export default App;
