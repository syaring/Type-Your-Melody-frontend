import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import firebase from 'firebase';

import PianoKeyboard from '../PianoKeyboard/PianoKeyboard';

import glogo from '../../img/google-login.png';
import './App.css';

var config = {
  apiKey: "AIzaSyBCrvBNP_x6Dxcy_b9rFN72c-smrvrvIQg",
  authDomain: "type-your-melody-1532934012672.firebaseapp.com",
  databaseURL: "https://type-your-melody-1532934012672.firebaseio.com",
  projectId: "type-your-melody-1532934012672",
  storageBucket: "type-your-melody-1532934012672.appspot.com",
  messagingSenderId: "125564717661"
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      userName: null,
      userEmail: null,
      userPhotoUrl: null
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;

        console.log(user);
        this.setState({
          isLoggedIn: true,
          userName: user.displayName,
          userEmail: user.email,
          userPhotoUrl: user.photoURL
        });
      } else {
      }
    });
  }

  triggerGoogleAuthentication() {
    firebase.auth().signInWithPopup(provider).then((result) => {
      var token = result.credential.accessToken;
      var user = result.user;

      console.log(user);
      this.setState({
        isLoggedIn: true,
        userName: user.displayName,
        userEmail: user.email,
        userPhotoUrl: user.photoURL
      });
      
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }
  
  logoutGoogleAuthentication() {
    firebase.auth().signOut().then(()=>{
      this.setState({
        isLoggedIn: false
      });
    }).catch(function(error) {
      // An error happened.
    });
  }

  render() {
    return (
        <div className="App">
          <div className="Header">
            <div className="Title-text">
              <div className="text">🎶 Type Your Melody 🎶</div>
            </div>
            <div className="User">
              { this.state.isLoggedIn &&
                <div className="User-pop">
                  <Popup trigger={<img className="MyPhoto" src={this.state.userPhotoUrl} />}
                    position="bottom center"
                    on="click"
                  >
                  <div className="MyInfo">
                    Hello, {this.state.userName}!
                  </div>
                  </Popup>
                </div>
              }
              <div className="Login-pop">
                <Popup
                  trigger={!this.state.isLoggedIn ?
                    <button className="Login">Login</button> :
                    <button className="Login">Logout</button>
                  }
                  position="bottom center"
                  on="click"
                >
                {!this.state.isLoggedIn ?
                  <button className="googleBtn" onClick={this.triggerGoogleAuthentication.bind(this)}>
                    <img className="googleLogo"src={glogo}/>
                    <div className="googleText">Login with Google</div>
                  </button> : 
                  <button className="googleBtn" onClick={this.logoutGoogleAuthentication.bind(this)}>
                    <img className="googleLogo" src={glogo}/>
                    <div className="googleText">Logout from Google</div>
                  </button>
                  }
                </Popup>
              </div>
            </div>
          </div>
          <div className="Piano">
            <PianoKeyboard isLoggedIn={this.state.isLoggedIn} />
          </div>
        </div>
    );
  }
}
export default App;
