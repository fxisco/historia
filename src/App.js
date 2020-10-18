import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="navbar-fixed">
        <nav className="blue">
          <div className="nav-wrapper">
            <div className="row">
              <div className="col s12">
                <a href="#" className="brand-container">
                  <img src={logo} className="App-logo" alt="logo" />
                  <span>Presidentes de la República Dominicana</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
