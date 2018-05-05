import React, { Component } from 'react';
import { View, Button } from 'react-native'

import TextInputWithFloatingLabel from '../../components/TextInputWithFloatingLabel';
import styles from './styles';

export default class LoginForm extends Component {
	constructor() {
	    super();
	    this.state = {
	      email: '',
	      password: ''
	    };
	}

	onChangeEmailText = text => this.setState({ email: text });

	onChangePasswordText = text => this.setState({ password: text });

	_onPressed() {
		console.log('pressed')
	}

	render () {
		return (
			<View style={styles.container}>
		        <TextInputWithFloatingLabel 
		          hint="Email"
		          placeholder='Input Email'
		          errorLabel='not correct format for email address'
		          textInputProps={{
	                value: this.state.email,
	                onChangeText: this.onChangeEmailText,
	                keyboardType: 'email-address',
	                autoCapitalize: 'none' }}
		        />
		        <TextInputWithFloatingLabel 
		          hint="Password"
		          placeholder='Input Password'
		          errorLabel='please use at least 6-12 characters'
		          textInputProps={{
	                value: this.state.password,
	                onChangeText: this.onChangePasswordText,
	                secureTextEntry: true }}
		        />
		        <Button
		          onPress={this._onPressed.bind(this)}
		          style={{ alignSelf: 'stretch'}}
		          title="Sign In"
		          color="#714DB1"
		          accessibilityLabel="Sign In"/>
	      </View>
		);
	}
}
