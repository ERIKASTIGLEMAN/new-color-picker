import React, { Component } from 'react'

export class App extends Component {
  render() {
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
              <input name="hue" type="range" min="0" max="360" />
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
              <input name="saturation" type="range" min="0" max="100" />
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
              <input name="lightness" type="range" min="0" max="100" />
            </h2>
          </label>
        </section>
      </main>
    )
  }
}
