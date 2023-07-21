// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    let {speed} = this.state
    this.setState(prevState => {
      if (prevState.count < 200) {
        console.log(`The speed of the Speedometer is ${prevState.count}`)
        speed = {count: prevState.count + 10}
      }
      return speed
    })
  }

  onBrake = () => {
    let {breakSpeed} = this.state
    this.setState(prevState => {
      if (prevState.count > 0) {
        console.log(`The speed of the Speedometer is ${prevState.count}`)
        breakSpeed = {count: prevState.count - 10}
      }
      return breakSpeed
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="title">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-measure">
          Speed is <span>{count}</span>mph
        </h1>
        <p className="speed-limit">Min limit is 0mph,Max limit is 200mph</p>
        <div>
          <button
            type="submit"
            className="accelerate-btn"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button type="submit" className="break-btn" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
