import React, { Component } from 'react';
import Vex from 'vexflow';

class Sheet extends Component {

  componentDidMount() {
    const VF = Vex.Flow;

    var vf = new VF.Factory({
      renderer: {elementId: 'sheet', width: 500, height: 200}
    });

    var score = vf.EasyScore();
    var system = vf.System();

    system.addStave({
      voices: [
        score.voice(score.notes('C#5/q, B4, A4, G#4', {stem: 'up'})),
        score.voice(score.notes('C#4/h, C#4', {stem: 'down'}))
      ]
    }).addClef('treble').addTimeSignature('4/4');

    vf.draw();
  }

  render() {
    return(
      <div id="sheet">
      </div>
    )
  }
}

export default Sheet;
