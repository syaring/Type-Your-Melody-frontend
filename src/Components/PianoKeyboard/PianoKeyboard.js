import React, { Component } from 'react';
import './PianoKeyboard.css';
import PianoKey from '../../Data/PianoKey';
import Sheet from '../Sheet/Sheet'

var instrument;

class PianoKeyboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      octave: 4,
      duration: 2,
      sound: 'piano', //organ, edm, acoustic
      addClass: false,
      keys: [],
      fourMeter: ''
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
    let note;
    switch (ev.key) {
      case 'q':
        this.playSound('C', this.state.octave - 1); 
        note = 'C'+(this.state.octave - 1).toString();
        this.pressedKey(note);
        break;
      case '2':
        this.playSound('C#', this.state.octave - 1);
        note = 'C#'+(this.state.octave - 1).toString();
        this.pressedKey(note);
        break;
      case 'w': 
        this.playSound('D', this.state.octave - 1);
        note = 'D'+(this.state.octave - 1).toString();
        this.pressedKey(note);
        break;
      case '3':
        this.playSound('D#', this.state.octave - 1);
        note = 'D#'+(this.state.octave - 1).toString();
        this.pressedKey(note);
        break;
      case 'e':
        this.playSound('E', this.state.octave - 1);
        note = 'E'+(this.state.octave - 1).toString();
        this.pressedKey(note);
        break;
      case 'r':
        this.playSound('F', this.state.octave - 1);
        note = 'F'+(this.state.octave - 1).toString();
        this.pressedKey(note);
        break;
      case '5':
        this.playSound('F#', this.state.octave - 1);
        note = 'F#'+(this.state.octave - 1).toString();
        this.pressedKey(note);
        break;
      case 't':
        this.playSound('G', this.state.octave - 1);
        note = 'G'+(this.state.octave - 1).toString();
        this.pressedKey(note);
        break;
      case '6':
        this.playSound('G#', this.state.octave - 1);
        note = 'G#'+(this.state.octave - 1).toString();
        this.pressedKey(note);
        break;
      case 'y':
        this.playSound('A', this.state.octave - 1);
        note = 'A'+(this.state.octave - 1).toString();
        this.pressedKey(note);
        break;
      case '7':
        this.playSound('A#', this.state.octave - 1);
        note = 'A#'+(this.state.octave - 1).toString();
        this.pressedKey(note);
        break;
      case 'u':
        this.playSound('B', this.state.octave - 1);
        note = 'B'+(this.state.octave - 1).toString();
        this.pressedKey(note);
        break;

      case 'i':
        this.playSound('C', this.state.octave);
        note = 'C'+(this.state.octave).toString();
        this.pressedKey(note);
        break;
      case '9':
        this.playSound('C#', this.state.octave);
        note = 'C#'+(this.state.octave).toString();
        this.pressedKey(note);
        break;
      case 'o':
        this.playSound('D', this.state.octave);
        note = 'D'+(this.state.octave).toString();
        this.pressedKey(note);
        break;
      case '0':
        this.playSound('D#', this.state.octave);
        note = 'D#'+(this.state.octave).toString();
        this.pressedKey(note);
        break;
      case 'p':
        this.playSound('E', this.state.octave);
        note = 'E'+(this.state.octave).toString();
        this.pressedKey(note);
        break;
      case '[':
        this.playSound('F', this.state.octave);
        note = 'F'+(this.state.octave).toString();
        this.pressedKey(note);
        break;
      case 'a':
        this.playSound('F#', this.state.octave);
        note = 'F#'+(this.state.octave).toString();
        this.pressedKey(note);
        break;
      case 'z':
        this.playSound('G', this.state.octave);
        note = 'G'+(this.state.octave).toString();
        this.pressedKey(note);
        break;
      case 's':
        this.playSound('G#', this.state.octave);
        note = 'G#'+(this.state.octave).toString();
        this.pressedKey(note);
        break;
      case 'x':
        this.playSound('A', this.state.octave);
        note = 'A'+(this.state.octave).toString();
        this.pressedKey(note);
        break;
      case 'd':
        this.playSound('A#', this.state.octave);
        note = 'A#'+(this.state.octave).toString();
        this.pressedKey(note);
        break;
      case 'c':
        this.playSound('B', this.state.octave);
        note = 'B'+(this.state.octave).toString();
        this.pressedKey(note);
        break;

      case 'v':
        this.playSound('C', this.state.octave + 1);
        note = 'C'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case 'g':
        this.playSound('C#', this.state.octave + 1);
        note = 'C#'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case 'b':
        this.playSound('D', this.state.octave + 1);
        note = 'D'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case 'h':
        this.playSound('D#', this.state.octave + 1);
        note = 'D#'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case 'n':
        this.playSound('E', this.state.octave + 1);
        note = 'E'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case 'm':
        this.playSound('F', this.state.octave + 1);
        note = 'F'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case 'k':
        this.playSound('F#', this.state.octave + 1);
        note = 'F#'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case ',':
        this.playSound('G', this.state.octave + 1);
        note = 'G'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case 'l':
        this.playSound('G#', this.state.octave + 1);
        note = 'G#'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case '.':
        this.playSound('A', this.state.octave + 1);
        note = 'A'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case ';':
        this.playSound('A#', this.state.octave + 1);
        note = 'A#'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case '/':
        this.playSound('B', this.state.octave + 1);
        note = 'B'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      
      // case '=': this.setState({octave: this.state.octave + 1}); break;
      // case '-': this.setState({octave: this.state.octave - 1}); break;
    }
  }

  pressedKey(key) {
    let parseKey = key+"/4";

    //console.log(parseKey);
    this.setState({
      keys: [...this.state.keys, parseKey]
    });

    if(this.state.keys.length === 4) {
      let keysToString = this.state.keys.toString();

      this.setState({
        fourMeter: keysToString
      });

      this.setInitialize();
    }
  }

  setInitialize() {
    this.setState({
      keys: [],
      fourMeter: ''
    });
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
        <div className="sheet">
          <Sheet notes={this.state.fourMeter} />
        </div>
      </div>
    )
  }
}

export default PianoKeyboard;