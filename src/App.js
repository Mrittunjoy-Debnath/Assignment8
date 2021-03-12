import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home';
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
      </Switch>

    </Router>


  );
}

export default App;
