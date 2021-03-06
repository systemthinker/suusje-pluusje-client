import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import About from "./pages/About";
import MoreInfo from "./pages/MoreInfo";
import Order from "./pages/Order";
import Dashboard from "./pages/Dashboard";
import Basket from "./pages/Basket";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import OrderSignup from "./pages/OrderSignup";

import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/clients/actions";
import UnderContruction from "./pages/UnderContruction";
import OrderOverview from "./pages/OrderOverview";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  console.log("load");
  return (
    <div className="App">
      <Navigation />
      <MessageBox />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/info" component={MoreInfo} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/order/signup" component={OrderSignup} />
        <Route exact path="/order/overview/:id" component={OrderOverview} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/basket/:id" component={Basket} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/construction" component={UnderContruction} />
        <Route path="/:else" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
