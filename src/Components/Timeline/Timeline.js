import React from 'react';

import 'timelinejs3/compiled/css/timeline.css';
import './Timeline.css';
import { presindentsData } from '../../data/presidents-data';

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

class TimelineContent extends React.Component {
  componentDidMount() {
    this.timeline = new window.TL.Timeline('timeline-embed', presindentsData, options);
  }

  render() {
    return (
      <div id='timeline-embed'></div>
    )
  }
}

export default class Timeline extends React.Component {
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
          {loaded && <TimelineContent />}
        </div>
        </div>
      </div>
    )
  }
}
