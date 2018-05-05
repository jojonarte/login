import React from 'react';
import { StyleSheet, AppRegistry } from 'react-native';
import LoginScreen from './screens/LoginScreen';

import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
	$primaryPurple: '#714DB1',
  	$primaryColor: '#FFF'
})

export default () => <LoginScreen style={styles.container}/>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});  
