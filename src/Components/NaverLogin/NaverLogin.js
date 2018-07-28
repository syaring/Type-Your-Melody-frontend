import React, { Component } from 'react';

class NaverLogin extends Component {
  
  componentDidMount() {
    this.props.naverLoginButtonReady();
  }

  render() {
    return (
      <div id='naverIdLogin'></div>
    );
  }
}

export default NaverLogin;