import React from "react";
import "materialize-css/dist/css/materialize.min.css";

import logo from "./logo.svg";
import "./App.css";

import Timeline from "./Components/Timeline";

function App() {
  return (
    <div className="App">
      <div className="navbar-fixed">
        <nav className="blue">
          <div className="nav-wrapper">
            <div className="row">
              <div className="col s12">
                <a href="#" className="brand-container">
                  <img
                    title="See File history below for details., Public domain, via Wikimedia Commons"
                    src={logo}
                    className="App-logo"
                    alt="logo"
                  />
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
      <footer className="page-footer blue">
        <div className="footer-copyright">
          <div className="container">
            2020 - Desarrollado por <a href="https://github.com/fxisco" className="plain-link">fxisco</a>
            <a className="grey-text text-lighten-4 right" href="#!">
              Github project
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
