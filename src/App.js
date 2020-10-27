import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import TopNav from "./containers/Navbar";
import PassengerForm from "./containers/PassengerForm";
import PassengerProfile from "./containers/PassengerProfile";
import PassengersList from "./containers/PassengersList";
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
  return (
    <div className="App">
      <TopNav />
      <header>
        <Switch>
          <Route exact path="/" component={PassengersList} />
          <Route path="/passenger/add" component={PassengerForm} history={props.history} />
          <Route path="/passenger/:id" component={PassengerProfile} history={props.history}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
