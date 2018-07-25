import React, { Component } from 'react';
import Vex from 'vexflow';

const VF = Vex.Flow;
// var vf;
// var score;
// var x = 120;
// var y = 80;
// var makeSystem;

class Sheet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    };

    this.vf;
    this.score;
    this.x = 120;
    this.y = 80;
    this.makeSystem;
  }


  componentDidMount() {
    this.vf = new VF.Factory({
      renderer: {elementId: 'sheet', width: 1000, height: 800}
    });

    this.score = this.vf.EasyScore({ throwOnError: true });

    this.makeSystem = (width) => {
      var system = this.vf.System({
        x: this.x,
        y: this.y,
        width: width,
        spaceBetweenStaves: 10
      });
      this.x += width;
      return system;
    }
  }

  componentDidUpdate() {

    if(this.props.notes.length !== 0) {
      if(this.state.count === 1) {
        var system = this.makeSystem(300);
        system.addStave({
          voices: [
            this.score.voice(this.score.notes(this.props.notes, {stem: 'up'}))
          ]
        })
        .addClef('treble');
        
        this.setState({
          count: this.state.count + 1
        });
      } else {
        var system = this.makeSystem(200);
        system.addStave({
          voices: [
            this.score.voice(this.score.notes(this.props.notes, {stem: 'up'}))
          ]
        });
      }
    }
    
    this.vf.draw();
  }
  
  render() {
    return(
      <div id="sheet">
      </div>
    )
  }
}

export default Sheet;
