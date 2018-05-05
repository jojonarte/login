import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';
import ViewPropTypes from 'ViewPropTypes';
import PropTypes from 'prop-types';
import styles from './styles';

type Props = {
	containerStyle: mixed,
	textInputStyle: mixed,
	labelStyle: mixed,
 	textInputProps: mixed,	
	hint: string,
	errorLabel: string
}

export default class TextInputWithFloatingLabel extends Component {
	static propTypes = {
		containerStyle: ViewPropTypes.style,
		textInputStyle: ViewPropTypes.style,
		labelStyle: ViewPropTypes.style,
		hint: PropTypes.string,
		placeholder: PropTypes.string,
		errorLabel: PropTypes.string
	};

	constructor(props) {
		super(props);
		this.state = {
			isErrorRevealed: false
		}
	}

	render() {
		return (
			<View style={[styles.container, this.props.containerStyle]}>
				<Text style={[styles.textInputLabel, this.props.labelStyle]}>
					{this.props.hint}
				</Text>
				<TextInput
			        style={[styles.textInputField, this.props.textInputStyle]}
			        onChangeText={(text) => this.setState({text})}
		        	value={this.state.text}
		        	placeholder={this.props.placeholder}
		        	{...this.props.textInputProps}
		      	/>
		      	<Text style={[styles.errorLabel]} >
		      		{this.props.errorLabel}
		      	</Text>
			</View>
			
		);
	}
}