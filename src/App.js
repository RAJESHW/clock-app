import React, { Component } from 'react'
import './App.css'

class App extends Component {

  constructor() {
    super()

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentDidMount() {
    // this.timer is a variable added to the class.
    // You can create those as many as you want or need
    // Their lifespan is only inside the class
    this.timer = setInterval(() => this._ticker(), 1000)
  }

  _ticker() {
    const date = new Date()

    this.setState({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    })

  }

  componentWillUnmount() {
    // Clearing time-based operations is very important to save memory.
    clearInterval(this.timer)
  }

  render() {

    // Extract the information you need. Do not keep referring to
    // this.state.foo or this.props.foo
    const { hours, minutes, seconds } = this.state

    return (
      <div className="App">
        <div id="clock">
          {hours}:{minutes}:{seconds}
        </div>
      </div>
    )
  }
}

export default App
