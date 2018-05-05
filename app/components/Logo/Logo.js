import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const logo = require('./images/logo.png')

const Logo = () => (
	<View style={styles.container}>
		<Image 
			resizeMode='contain'
			source={logo} 
		/>
	</View>
);	

export default Logo;