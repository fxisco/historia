import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import 'timelinejs3/compiled/css/timeline.css';
import logo from './logo.svg';
import './App.css';
import { presindentsData } from './presidents-data';

const options = {
  language: 'es',
  height: "100%",
}

const loadTL = (callback) => {
  const existingScript = document.getElementById('TL');

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js';
    script.id = 'TL';
    script.crossOrigin = 'anonymous';

    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};

class Timeline extends React.Component {
  componentDidMount() {
    this.timeline = new window.TL.Timeline('timeline-embed', presindentsData, options);
  }

  render() {
    return (
      <div id='timeline-embed'></div>
    )
  }
}

class TimelineWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loaded: false };
  }

  componentDidMount() {
    loadTL(() => {
      this.setState({ loaded: true });
    });
  }

  render() {
    const { loaded } = this.state;
    return (
      <div className="row">
        <div className="col s12 no-padding">
        <div className="time-container">
          {loaded && <Timeline />}
        </div>
        </div>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <div className="navbar-fixed">
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
      <div className="content">
        <TimelineWrapper />
      </div>
    </div>
  );
}

export default App;
