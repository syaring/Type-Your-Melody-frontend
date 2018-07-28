import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PianoKeyboard from '../PianoKeyboard/PianoKeyboard';
import Settings from '../Settings/Settings';
import NaverLogin from '../NaverLogin/NaverLogin';
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

  initNaverLoginModule() {
    this.naverLogin = new window.naver.LoginWithNaverId({
			clientId: "vZFjNbw_PhQqHlvzxA98",
			callbackUrl: "http://localhost:3000/",
			isPopup: false, /* 팝업을 통한 연동처리 여부 */
			loginButton: {color: "green", type: 3, height: 60} /* 로그인 버튼의 타입을 지정 */
		});
    this.naverLogin.init();

    this.naverLogin.getLoginStatus((status) => {
      console.log(status);
      console.log(this.naverLogin.user);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/"
            render={()=>{
              return (
                <div>
                  <NaverLogin naverLoginButtonReady={this.initNaverLoginModule.bind(this)} />
                  <PianoKeyboard />
                  octave <Settings default={this.state.octave} max={7} min={2}/>
                  BPM <Settings default={this.state.bpm} max={200} min={80}/>
                </div>
              );
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
