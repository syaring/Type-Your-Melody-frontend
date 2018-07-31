import React, { Component } from 'react';
import './PianoKeyboard.css';
import PianoKey from '../../Data/PianoKey';
import Sheet from '../Sheet/Sheet'
import axios from 'axios';

import shareBtn from '../../img/share.png';
import Share from '../Share/Share';
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
      fourMeter: '',
      pdfUrl: null,
      activateShare: false
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
      case '=':
        this.playSound('F#', this.state.octave);
        note = 'F#'+(this.state.octave).toString();
        this.pressedKey(note);
        break;
      case ']':
        this.playSound('G', this.state.octave);
        note = 'G'+(this.state.octave).toString();
        this.pressedKey(note);
        break;
      case 'a':
        this.playSound('G#', this.state.octave);
        note = 'G#'+(this.state.octave).toString();
        this.pressedKey(note);
        break;
      case 'z':
        this.playSound('A', this.state.octave);
        note = 'A'+(this.state.octave).toString();
        this.pressedKey(note);
        break;
      case 's':
        this.playSound('A#', this.state.octave);
        note = 'A#'+(this.state.octave).toString();
        this.pressedKey(note);
        break;
      case 'x':
        this.playSound('B', this.state.octave);
        note = 'B'+(this.state.octave).toString();
        this.pressedKey(note);
        break;

      case 'c':
        this.playSound('C', this.state.octave + 1);
        note = 'C'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case 'f':
        this.playSound('C#', this.state.octave + 1);
        note = 'C#'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case 'v':
        this.playSound('D', this.state.octave + 1);
        note = 'D'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case 'g':
        this.playSound('D#', this.state.octave + 1);
        note = 'D#'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case 'b':
        this.playSound('E', this.state.octave + 1);
        note = 'E'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case 'n':
        this.playSound('F', this.state.octave + 1);
        note = 'F'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case 'j':
        this.playSound('F#', this.state.octave + 1);
        note = 'F#'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case 'm':
        this.playSound('G', this.state.octave + 1);
        note = 'G'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case 'k':
        this.playSound('G#', this.state.octave + 1);
        note = 'G#'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case ',':
        this.playSound('A', this.state.octave + 1);
        note = 'A'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case 'l':
        this.playSound('A#', this.state.octave + 1);
        note = 'A#'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case '.':
        this.playSound('B', this.state.octave + 1);
        note = 'B'+(this.state.octave + 1).toString();
        this.pressedKey(note);
        break;
      case ';':
      note = 'rest'
      this.pressedKey(note);
      break;
      // case '=': this.setState({octave: this.state.octave + 1}); break;
      // case '-': this.setState({octave: this.state.octave - 1}); break;
    }
  }

  pressedKey(key) {

    
    let parseKey;
    
    if(key==='rest') {
      parseKey = "B4/4/r"
    } else {
      parseKey = key+"/4";
    }

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

  onClickShareButton() {
    this.state.activateShare ? 
      this.setState({
        activateShare: false
      }) :
      this.setState({
        activateShare: true
      });
  }

  createPDF() {

    if(this.props.isLoggedIn) {
      var notesData = document.getElementById('sheet').innerHTML;
    
      axios.post('http://localhost:8080/toPDF', {
        tagData: notesData
      }).then ((res) => {
        console.log(res.data.url);
        this.setState({
          pdfUrl: res.data.url
        });
      });
    } else {
      alert("로그인 후 이용하실 수 있습니다!");
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
        <div className="sheet">
          <Sheet notes={this.state.fourMeter} />
        </div>
        <button onClick={this.createPDF.bind(this)}>Done And Create PDF</button>
        {
          this.state.pdfUrl &&
          <div className="pdf-viewer">
            <iframe id="pdf-file" src={this.state.pdfUrl}></iframe>
            <img className="share-btn" src={shareBtn} onClick={this.onClickShareButton.bind(this)}/>
            { this.state.activateShare &&
              <div className="social-btn">
                <Share url={this.state.pdfUrl}/>
              </div>
            }
          </div>
        }
      </div>
    )
  }
}

export default PianoKeyboard;
