import React, { Component } from 'react';
import { View, Keyboard } from 'react-native'

import { TextInputWithFloatingLabel } from '../../components/TextInputWithFloatingLabel';
import { CustomButton } from '../../components/Button';

import styles from './styles';
import { validator } from '../../../util/validator';

export default class LoginForm extends Component {
	constructor() {
	    super();
	    this.state = {
	      email: '',
	      password: '',
	      showEmailError: false,
	      showPasswordError: false,
	      isDisabled: true
	    };
	}

	onChangeEmailText = (text) => {
		console.log('change email');
		const { showPasswordError, password } = this.state;
		if (!validator.validateEmail(text)) {
			this.setState({ 
				showEmailError: true,
				email: text,
				isDisabled: true
			});
			return;
		}

		this.setState({ 
			showEmailError: false,
			email: text,
			isDisabled: (showPasswordError || password.trim() === '')
		});
	}

	onChangePasswordText = (text) => {
		console.log('change pass');
		if (!validator.validatePassword(text)) {
			this.setState({ 
				showPasswordError: true,
				password: text,
				isDisabled: true
			});
			return;
		}
		const { showEmailError, email } = this.state;
		this.setState({ 
			showPasswordError: false,
			password: text,
			isDisabled: (showEmailError || email.trim() === '')
		});
		
	}

	_onPressed = () => {
		console.log('validating...');
		Keyboard.dismiss();
		const { email, password} = this.state;

		this.onChangeEmailText(email);
		this.onChangePasswordText(password);

		if (!validator.validateEmail(email) || !validator.validatePassword(password)) {
			return;
		}
		
		alert(
	        'Login Success',
	        'YAY!',
	        [
	          { text: 'OK', onPress: () => console.log('ok') }
	        ],
	        { cancelable: false }
      	)
	}

	render () {
		return (
			<View style={styles.container}>
		        <TextInputWithFloatingLabel 
		          hint="Email"
		          placeholder='Input Email'
		          errorLabel='not correct format for email address'
		          keyboardType='email-address'
		          value={this.state.email}
		          onChangeText={this.onChangeEmailText}
		          showError={this.state.showEmailError}
	              autoCapitalize='none'
		        />
		        <TextInputWithFloatingLabel 
		          hint="Password"
		          placeholder='Input Password'
		          errorLabel='please use at least 6-12 characters'
		          value={this.state.password}
		          onChangeText={this.onChangePasswordText}
		          maxLength={12}
		          showError={this.state.showPasswordError}
	              secureTextEntry
		        />
				<CustomButton 
				  disabled={this.state.isDisabled}
				  title="Sign In"
				  onPress={this._onPressed}
				/>
	      	</View>
		);
	}
}