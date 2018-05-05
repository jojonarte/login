import React, { Component } from 'react';
import { View, Button } from 'react-native'

import { TextInputWithFloatingLabel } from '../../components/TextInputWithFloatingLabel';

import styles from './styles';
import { validator } from '../../../util/validator'

export default class LoginForm extends Component {
	constructor() {
	    super();
	    this.state = {
	      email: '',
	      password: '',
	      showEmailError: false,
	      showPasswordError: false
	    };
	}

	onChangeEmailText = (text) => {
		console.log(validator.validateEmail(text))
		if (!validator.validateEmail(text)) {
			this.setState({ 
				showEmailError: true,
				email: text
			});
			return;
		}
		this.setState({ 
			showEmailError: false,
			email: text
		});
	}

	onChangePasswordText = (text) => {
		console.log(validator.validatePassword(text))
		if (!validator.validatePassword(text)) {
			this.setState({ 
				showPasswordError: true,
				password: text
			});
			return;
		}
		this.setState({ 
			showPasswordError: false,
			password: text
		});
	}

	// _onPressed() {
	// 	console.log('pressed')
	// }

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
	      </View>
		);
	}
}


		        // <Button
		        //   onPress={this._onPressed.bind(this)}
		        //   style={{ alignSelf: 'stretch'}}
		        //   title="Sign In"
		        //   color="#714DB1"
		        //   accessibilityLabel="Sign In"/>