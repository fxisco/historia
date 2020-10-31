import React from 'react';

import 'timelinejs3/compiled/css/timeline.css';
import './Timeline.css';
import { presindentsData } from '../../data/presidents-data';

const options = {
  height: "100%",
  initial_zoom: 10,
  timenav_position: "top",
  timenav_height_percentage: 40,
  hash_bookmark: true,
  language: "es"
}

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
    this.loadTL = this.loadTL.bind(this);
  }

  loadTL = (callback) => {
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

  componentDidMount() {
    this.loadTL(() => {
      this.setState({ loaded: true });
    });
  }

  render() {
    const { loaded } = this.state;

    return (
      <div className="time-container">
        {loaded && <TimelineContent />}
      </div>
    )
  }
}
