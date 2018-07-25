import React, { Component } from 'react';
import PianoKeyboard from '../PianoKeyboard/PianoKeyboard';
import Settings from '../Settings/Settings';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bpm: 100,
      octave: 4
    }
  }

  changeOctaveValue (value) {
    if (value === '+') {

    } else if (value === '-') {

    }
  }

  changeBPMValue (value) {

  }
  render() {
    return (
      <div className="App">
        <PianoKeyboard />
        <Settings default={100} max={200} min={80}/>
        <Settings />
      </div>
    );
  }
}
export default App;
