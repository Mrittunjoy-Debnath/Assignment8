import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home';
import TeamDetail from './components/TeamDetail/TeamDetail';
import NoMatch from './NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  return (

    <Router>
      <Switch>
      <Route path="/home">
      <Home/>
      </Route>

    <Route path="/team/:teamId">
      <TeamDetail/>
      </Route>

      <Route exact path="/">
          <Home/>
      </Route>

      <Route path="*">
          <NoMatch/>
      </Route>


      </Switch>

    </Router>
  );
}

export default App;
