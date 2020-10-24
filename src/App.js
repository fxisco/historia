import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import logo from './logo.svg';
import './App.css';

import Timeline from './Components/Timeline'

function App() {
  return (
    <div className="App">
      <div className="navbar-fixed">
        <nav className="blue">
          <div className="nav-wrapper">
            <div className="row">
              <div className="col s12">
                <a href="#" className="brand-container">
                  <img title="See File history below for details., Public domain, via Wikimedia Commons" src={logo} className="App-logo" alt="logo" />
                  <span>Presidentes de la República Dominicana</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="content">
        <Timeline />
      </div>
    </div>
  );
}

export default App;
