import Nav from "./components/Nav";
import Main from "./components/Main";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <>
        <Nav />
      <Switch>
        <Route exact path="/catalog/details/:categoryParams?">
          <Main />
        </Route>
        <Route exact path="/catalog/:categoryParams?">
          <Main />
        </Route>
        <Route path="/user/profile">
          <h2>This is User Profile Section</h2>
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/cart">
          <h2>This is Cart Section</h2>
        </Route>
        <Route path="/dashboard">
          <h2>This is Dashboard Section</h2>
        </Route>
        <Route path="/inventory">
          <h2>This is Inventory Section</h2>
        </Route>
        <Route path="/transactions">
         <h2>This is Transactions Section</h2>
        </Route>
        <Route path="/orders">
          <h2>This is Orders Section</h2>
        </Route>
        <Route path="/store">
          <h2>This is Store Section</h2>
        </Route>
      </ Switch>
    </>
  );
}

export default App;
