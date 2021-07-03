import Nav from "./components/Nav";
import Main from "./components/Main";
import { Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import MainPage from "./components/Main-page";
import SimpleModal from "./components/Register-modal";
import LoginModal from "./components/Login-modal";
import Logout from "./components/Logout";
import Product from "./components/Product";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/catalog/details/:categoryParams?">
          <Nav />
          <Main />
        </Route>
        <Route exact path="/catalog/:categoryParams?">
          <Nav />
          <Main />
        </Route>
        <Route path="/user/profile">
          <Nav />
          <h2>this is user profile</h2>
          <Logout />
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <Nav />
          <LoginModal />
        </Route>
        <Route path="/product/:productId?">
          <Nav />
          <Product />
        </Route>
        <Route exact path="/cart">
          <Nav />
          <Cart />
        </Route>
        <Route exact path="/register">
          <Nav />
          <SimpleModal />
        </Route>
        <Route path="/dashboard">
          <Nav />
          <h2>This is Dashboard Section</h2>
        </Route>
        <Route path="/inventory">
          <Nav />
          <h2>This is Inventory Section</h2>
        </Route>
        <Route path="/transactions">
          <Nav />
         <h2>This is Transactions Section</h2>
        </Route>
        <Route path="/orders">
          <Nav />
          <h2>This is Orders Section</h2>
        </Route>
        <Route path="/store">
          <Nav />
          <h2>This is Store Section</h2>
        </Route>
      </ Switch>
    </>
  );
}

export default App;
