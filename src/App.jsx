import React, { Component } from 'react'

export class App extends Component {
  state = { hue: 0, saturation: 0, lightness: 0 }

  componentDidMount() {
    this.randomColor()
  }
  handleSlidingSlider = (event) => {
    this.setState({ name: event.target.value })
  }

  randomNum(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
  randomColor = (event) => {
    let hue = this.randomNum(360)
    let saturation = this.randomNum(100)
    let lightness = this.randomNum(100)

    this.setState({ hue, saturation, lightness })
  }

  render() {
    const backgroundColor = `HSL  (${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`

    return (
      <main>
        <div className="stripe-text">Color Picker</div>

        <section>
          {/* create labels for each color slide */}
          <label>
            <h2>
              <div className="rainbow-letters">
                <span>H</span>
                <span>U</span>
                <span>E</span>
              </div>
              <input
                name="hue"
                type="range"
                min="0"
                max="360"
                onChange={this.handleSlidingSlider}
                value={this.state.hue}
              />
            </h2>
          </label>
          <label>
            <h2>
              <div className="lettersFade">
                <span>S</span>
                <span>A</span>
                <span>T</span>
                <span>U</span>
                <span>R</span>
                <span>A</span>
                <span>T</span>
                <span>I</span>
                <span>O</span>
                <span>N</span>
              </div>
              <input
                name="saturation"
                type="range"
                min="0"
                max="100"
                onChange={this.handleSlidingSlider}
                value={this.state.saturation}
              />
            </h2>
          </label>
          <label>
            <h2>
              <div className="lettersBright">
                <span>L</span>
                <span>I</span>
                <span>T</span>
                <span>G</span>
                <span>H</span>
                <span>T</span>
                <span>N</span>
                <span>E</span>
                <span>S</span>
                <span>S</span>
              </div>
              <input
                name="lightness"
                type="range"
                min="0"
                max="100"
                onChange={this.handleSlidingSlider}
                value={this.state.lightness}
              />
            </h2>
          </label>
        </section>
        <code>{backgroundColor}</code>
        <footer>
          <button onClick={this.randomColor}> RANDOMIZER</button>
        </footer>
      </main>
    )
  }
}
