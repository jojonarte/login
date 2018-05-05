import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';
import ViewPropTypes from 'ViewPropTypes';
import PropTypes from 'prop-types';
import styles from './styles';
import renderIf from '../../../util/render-if';


const TextInputWithFloatingLabel = (props) => {
	const { hint, errorLabel, placeholder, text, showError} = props;
	const textInputStyles = [styles.textInputField];
	if (!text) {
		textInputStyles.push(styles.textInputFieldPlaceholder);
	}
	
	return (
		<View style={styles.container}>
			<Text style={styles.textInputLabel}>
				{hint}
			</Text>
			<TextInput
				underlineColorAndroid='transparent'
		        style={textInputStyles}
	        	value={!text ? "" : text}
	        	placeholder={placeholder}
	        	{...props}
	      	/>
	      	<Text style={styles.errorLabel} >
	      		{showError ? errorLabel : ""}
	      	</Text>
	      	
		</View>
	);
};
	


TextInputWithFloatingLabel.propTypes = {
	hint: PropTypes.string,
	errorLabel: PropTypes.string,
	placeholder: PropTypes.string
};

export default TextInputWithFloatingLabel;