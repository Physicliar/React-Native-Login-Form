
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp( {
      apiKey: "AIzaSyCnaYBnofS3V04ouDbqm8ku30i7tmN16WA",
      authDomain: "auth-29706.firebaseapp.com",
      databaseURL: "https://auth-29706.firebaseio.com",
      projectId: "auth-29706",
      storageBucket: "",
      messagingSenderId: "183147872776",
      appId: "1:183147872776:web:d1ca3aae934e41c1"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    ); 
  }
}

export default App;
