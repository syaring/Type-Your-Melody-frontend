import React, { Component } from 'react';
import './PianoKeyboard.css';
import PianoKey from './Data/PianoKey';

var instrument;
class PianoKeyboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      octave: 4,
      duration: 2,
      sound: 'piano'
    }
  }

  componentDidMount = () => {
    window.addEventListener('keypress', this.keyMapping.bind(this));
  }

  componentWillUnmount = () => {
    window.removeEventListener('keypress', this.keyMapping.bind(this));
  }

  playSound(note, octave, ev) {
    instrument = window.Synth.createInstrument(this.state.sound);
    instrument.play(note, octave, 3);
  }

  keyMapping(ev) {
    switch(ev.key){
      case 'q': this.playSound('C', this.state.octave - 1); break;
      case '2': this.playSound('C#', this.state.octave - 1); break;
      case 'w': this.playSound('D', this.state.octave - 1); break;
      case '3': this.playSound('D#', this.state.octave - 1); break;
      case 'e': this.playSound('E', this.state.octave - 1); break;
      case 'r': this.playSound('F', this.state.octave - 1); break;
      case '5': this.playSound('F#', this.state.octave - 1); break;
      case 't': this.playSound('G', this.state.octave - 1); break;
      case '6': this.playSound('G#', this.state.octave - 1); break;
      case 'y': this.playSound('A', this.state.octave - 1); break;
      case '7': this.playSound('A#', this.state.octave - 1); break;
      case 'u': this.playSound('B', this.state.octave - 1); break;

      case 'i': this.playSound('C', this.state.octave); break;
      case '9': this.playSound('C#', this.state.octave); break;
      case 'o': this.playSound('D', this.state.octave); break;
      case '0': this.playSound('D#', this.state.octave); break;
      case 'p': this.playSound('E', this.state.octave); break;
      case '[': this.playSound('F', this.state.octave); break;
      case 'a': this.playSound('F#', this.state.octave); break;
      case 'z': this.playSound('G', this.state.octave); break;
      case 's': this.playSound('G#', this.state.octave); break;
      case 'x': this.playSound('A', this.state.octave); break;
      case 'd': this.playSound('A#', this.state.octave); break;
      case 'c': this.playSound('B', this.state.octave); break;

      case 'v': this.playSound('C', this.state.octave + 1); break;
      case 'g': this.playSound('C#', this.state.octave + 1); break;
      case 'b': this.playSound('D', this.state.octave + 1); break;
      case 'h': this.playSound('D#', this.state.octave + 1); break;
      case 'n': this.playSound('E', this.state.octave + 1); break;
      case 'm': this.playSound('F', this.state.octave + 1); break;
      case 'k': this.playSound('F#', this.state.octave + 1); break;
      case ',': this.playSound('G', this.state.octave + 1); break;
      case 'l': this.playSound('G#', this.state.octave + 1); break;
      case '.': this.playSound('A', this.state.octave + 1); break;
      case ';': this.playSound('A#', this.state.octave + 1); break;
      case '/': this.playSound('B', this.state.octave + 1); break;
      
    }
  }

  render() {
    let keys = [];

    for (var i = this.state.octave - 1 ; i < this.state.octave + 2; i ++) {
      PianoKey.map((key, index) => {
        keys.push(
          <li className={`${key.color} ${key.value}`}
            onMouseDown={this.playSound.bind(this, key.note, i)}
          >
          </li>
        );
      });
    }
    return (
      <div className="PianoKeyboard">
        <ul className="set">
          {keys}
        </ul>
        {/* <ul className="set">
          <li className="white c"
            data-key='c'
            onClick={this.playSound.bind(this, 'C', this.state.octave, this.state.duration)}>
          </li>
          <li className="black cs"
            onClick={this.playSound.bind(this, 'C#', this.state.octave, this.state.duration)}
            onKeyDown={this.keyMapping.bind(this)}>
          </li>
          <li className="white d" onClick={this.playSound.bind(this, 'D', this.state.octave)}></li>
          <li className="black ds" onClick={this.playSound.bind(this, 'D#', this.state.octave)}></li>
          <li className="white e" onClick={this.playSound.bind(this, 'E', this.state.octave)}></li>
          <li className="white f" onClick={this.playSound.bind(this, 'F', this.state.octave)}></li>
          <li className="black fs" onClick={this.playSound.bind(this, 'F#', this.state.octave)}></li>
          <li className="white g" onClick={this.playSound.bind(this, 'G', this.state.octave)}></li>
          <li className="black gs" onClick={this.playSound.bind(this, 'G#', this.state.octave)}></li>
          <li className="white a" onClick={this.playSound.bind(this, 'A', this.state.octave)}></li>
          <li className="black as" onClick={this.playSound.bind(this, 'A#', this.state.octave)}></li>
          <li className="white b" onClick={this.playSound.bind(this, 'B', this.state.octave)}></li>
        </ul> */}
      </div>
    )
  }
}

export default PianoKeyboard;