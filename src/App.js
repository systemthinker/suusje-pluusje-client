import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Over from './pages/Over'
import MeerInfo from './pages/MeerInfo'
import Bestelling from './pages/Bestelling'
import Dashboard from './pages/Dashboard'
import Winkelwagen from './pages/Winkelwagen'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/klant/actions";





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
        <Route path="/over" component={Over} />
        <Route path="/info" component={MeerInfo} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/bestelling" component={Bestelling} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/winkelwagen" component={Winkelwagen} />
        <Route path="/product/:id" component={ProductDetails}/>
      </Switch>
    </div>
  );
}

export default App;
