import React, { Component } from 'react';
import './PianoKeyboard.css';
import PianoKey from '../../Data/PianoKey';

var instrument;

class PianoKeyboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      octave: 4,
      duration: 2,
      sound: 'piano', //organ, edm, acoustic
      addClass: false
    }
  }

  componentDidMount = () => {
    window.addEventListener('keydown', this.keyMapping.bind(this));
  }

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.keyMapping.bind(this));
  }

  playSound(note, octave, ev) {
    instrument = window.Synth.createInstrument(this.state.sound);
    instrument.play(note, octave, 3);
  }

  keyMapping(ev) {
    switch (ev.key) {
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
      
      case '=': this.setState({octave: this.state.octave + 1}); break;
      case '-': this.setState({octave: this.state.octave - 1}); break;
    }
  }

  render() {
    let keys = [];
    
    for (var i = this.state.octave - 1 ; i <= this.state.octave + 1; i ++) {
      PianoKey.map((key, index) => {
        keys.push(
          <li
            key={`${key.note}`+'/'+`${i}`}
            className={`${key.color} ${key.value}`}
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
      </div>
    )
  }
}

export default PianoKeyboard;
