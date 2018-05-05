import React from 'react';
import { StyleSheet, AppRegistry } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';

export default class App extends React.Component {
 

  render() {
    return (
      <LoginScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});  
