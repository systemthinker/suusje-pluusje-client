import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
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

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/clients/actions";
import UnderContruction from "./pages/UnderContruction";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/info" component={MoreInfo} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/order/signup" component={OrderSignup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/basket/:id" component={Basket} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/construction" component={UnderContruction} />
      </Switch>
    </div>
  );
}

export default App;
