import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route, NavLink} from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'

function App() {
  return (
    <>
    
    <Router >
      <div className="nav-center ">
        <Link className = "nav-links" to="/"><img src="./images/logo.svg" alt=""></img></Link>
      </div>
    <NavLink to = '/' >
      <ul className="nav-btn">
          <li >
          
          </li>
      </ul>
         
    </NavLink>
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/rooms"><Rooms /></Route>
      <Route exact path="/rooms/singleRoom/:slug">< SingleRoom /></Route>
      <Route exact path='' >< Error /></Route>
    </Switch>
    
    </Router>
    </>
  );
}

export default App;
