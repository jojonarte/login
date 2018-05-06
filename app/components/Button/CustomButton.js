import React from 'react';

import styles from './styles';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const CustomButton = (props) => {
	const {title, disabled} = props;
	const containerStyles = [styles.container];
	if (disabled) {
		containerStyles.push(styles.disabledContainer);
	}

	return (
		<TouchableOpacity style={containerStyles} {...props}>
			<View style={styles.wrapper}>
				<Text style={styles.text}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
}

CustomButton.propTypes = {
	title: PropTypes.any,
	disabled: PropTypes.bool
};

export default CustomButton;