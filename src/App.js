import React from "react";
import SideBar from "./components/SideBar/SideBar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css";
import Sidebar_test from "./components/sidebar_test/sidebar_test";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/user/user";
import NewUser from "./pages/newUserPage/newUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProductPage/NewProduct";

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <div class="container">
          <SideBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newuser">
              <NewUser />
            </Route>


            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>
          </Switch>

          {/* <div class="Others">Other PAGEs</div> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
