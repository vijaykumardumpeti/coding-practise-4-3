// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangos: 0, bananas: 0}

  eatMango = () => {
    this.setState(prevState => ({mangos: prevState.mangos + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangos, bananas} = this.state
    return (
      <div className="fruits-container">
        <h1>
          Bob ate <span className="span">{mangos}</span> mangoes{' '}
          <span className="span">{bananas}</span> bananas
        </h1>
        <div className="image-container">
          <div>
            <img
              alt="mango"
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            />
          </div>
          <div>
            <img
              alt="banana"
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            />
          </div>
        </div>
        <div className="button-container">
          <button
            onClick={this.eatMango}
            className={`btn-style ${'btn1'}`}
            type="button"
          >
            Eat Mango
          </button>
          <button
            onClick={this.eatBanana}
            className={`btn-style ${'btn2'}`}
            type="button"
          >
            Eat Banana
          </button>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
