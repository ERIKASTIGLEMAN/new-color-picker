import React, { Component } from 'react'

export class App extends Component {
  Render() {
    return (
      <main>
        <h1> Color Picker</h1>

        <div>
          {/* create labels for each color slide */}
          <label>
            <h2>
              Hue
              <input name="hue" type="range" min="0" max="360" />
            </h2>
          </label>
          <label>
            <h2>
              Saturation
              <input name="saturation" type="range" min="0" max="100" />
            </h2>
          </label>
          <label>
            <h2>
              Lightness
              <input name="lightness" type="range" min="0" max="100" />
            </h2>
          </label>
        </div>
      </main>
    )
  }
}
