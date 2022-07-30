import React, {Component} from 'react';
import {Route, NavLink, HashRouter, Routes} from "react-router-dom";
import Home from './Home.js';
import Features from './Features.js';
import Pricing from './Pricing.js';
import LearnMore from './LearnMore.js';

class Main extends Component {
  render() {
    return(
      <div>
      <HashRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Practice Site .co</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav container-nav">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/features">Features</NavLink>
                <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                <NavLink className="nav-link disabled" to="/dis">Disabled</NavLink>
              </div>
            </div>
          </div>
        </nav>


        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/learnmore" element={<LearnMore/>}/>
        </Routes>
      </HashRouter>
      </div>
    );
  }
}

export default Main;
