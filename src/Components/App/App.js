import React, { Component } from 'react';
import PianoKeyboard from '../PianoKeyboard/PianoKeyboard';
import Settings from '../Settings/Settings';
// import Sheet from '../Sheet/Sheet'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bpm: 100,
      octave: 4
    }
  }

  render() {
    return (
      <div className="App">
        <PianoKeyboard />
        octave <Settings default={this.state.octave} max={7} min={2}/>
        BPM <Settings default={this.state.bpm} max={200} min={80}/>
        {/* <Sheet notes={'C#5/4, G4, A4/8, B4, C#5/4'}/> */}
      </div>
    );
  }
}
export default App;
