import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        hours : "default",
        min : "default",
        sec : "default",
        milliSec : "default"
      };
  }
  calculateTime() {
    var time = new Date();
    var hours = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var milliSec = time.getMilliseconds();
    return {
      hours : hours,
      min : min,
      sec : sec,
      milliSec : milliSec

    }
  }
  render() {
    setInterval(() => {
      var time = this.calculateTime();
      this.setState({
        hours : time.hours,
        min : time.min,
        sec : time.sec,
        milliSec : time.milliSec
      });
    },100);
    return (
      <div className="App">
        <div id="time">
          <span>Hours: {this.state.hours}</span>
          <span>Min: {this.state.min}</span>
          <span>Seconds: {this.state.sec}</span>
          <span>Milli Seconds: {this.state.milliSec}</span>
        </div>
      </div>
    );
  }
}

export default App;
