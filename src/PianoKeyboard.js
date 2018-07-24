import React, { Component } from 'react';
import './PianoKeyboard.css';

class PianoKeyboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      octave: 3
    }
  }

  render() {
    return (
      <div className="PianoKeyboard">
        <ul className="set">
          <li className="white c"></li>
          <li className="black cs"></li>
          <li className="white d"></li>
          <li className="black ds"></li>
          <li className="white e"></li>
          <li className="white f"></li>
          <li className="black fs"></li>
          <li className="white g"></li>
          <li className="black gs"></li>
          <li className="white a"></li>
          <li className="black as"></li>
          <li className="white b"></li>

          <li className="white c"></li>
          <li className="black cs"></li>
          <li className="white d"></li>
          <li className="black ds"></li>
          <li className="white e"></li>
          <li className="white f"></li>
          <li className="black fs"></li>
          <li className="white g"></li>
          <li className="black gs"></li>
          <li className="white a"></li>
          <li className="black as"></li>
          <li className="white b"></li>
        </ul>
      </div>
    )
  }
}

export default PianoKeyboard;