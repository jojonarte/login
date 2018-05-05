import React from 'react';

import styles from './styles';
import { TouchableOpacity, View, Text } from 'react-native';

const CustomButton = (props) => {
	const {title} = props;

	return (
		<TouchableOpacity style={styles.container} {...props} >
			<View style={styles.wrapper}>
				<Text style={styles.text}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
}

export default CustomButton;