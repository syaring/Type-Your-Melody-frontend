import React, { Component } from 'react';
import minus from '../../img/minus.png'
import plus from '../../img/plus.png'
import _ from 'lodash';

import './Settings.css';

class Settings extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: this.props.default,
      displayValue: this.props.default
    };

    this.setValue = _.debounce(this.setValue, 500);

  }

  increment () {
    if (this.state.value < this.props.max) {
      this.setState({
        value: this.state.value + 1,
        displayValue: this.state.displayValue + 1 
      });
    }
  }

  decrement () {
    if (this.state.value > this.props.min) {
      this.setState({
        value: this.state.value - 1,
        displayValue: this.state.displayValue - 1 
      });
    }
  }

  changeValue (value) {

    if (isNaN(Number(value))) {
      return;
    } else {
      this.setState({
        displayValue: Number(value)
      });
    }

    this.setValue();
  }

  setValue () {
    if (this.state.displayValue < this.props.min) {
      this.setState({
        value: this.props.min
      });
    } else if (this.state.displayValue > this.props.max) {
      this.setState({
        value: this.props.max
      });
    } else {
      this.setState({
        value: this.state.displayValue
      });
    }

    this.setState({
      displayValue: this.state.value
    });
  }


  render() {
    return (
      <div className="Settings">
        <img className="buttons-img" src={minus} onClick={this.decrement.bind(this)} />
        <input
          className="value-input"
          type="number"
          value={this.state.displayValue}
          onChange={(ev) => this.changeValue(ev.target.value)}
        />
        <img className="buttons-img" src={plus} onClick={this.increment.bind(this)} />
      </div>
    );
  }
}

export default Settings;
