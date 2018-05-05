import React, { Component } from 'react';
import { Platform, View, Keyboard, Animated } from 'react-native';
import styles from './styles';

const logo = require('./images/logo.png')
const ANIMATION_DURATION = 300;

export default class Logo extends Component {
	constructor(props) {
	  super(props);
	
	  this.imageSize = new Animated.Value(styles.$largeLogoSize);
	}

	keyboardShow = () => {
		Animated.timing(this.imageSize, {
			toValue: styles.$scaledDownLogoSize,
			duration: ANIMATION_DURATION
		}).start();
	};

	keyboardHide = () => {
		Animated.timing(this.imageSize, {
			toValue: styles.$largeLogoSize,
			duration: ANIMATION_DURATION
		}).start();
	};

	componentDidMount() {

		let showListenerKey = 'keyboardWillShow';
		let hideListenerKey = 'keyboardWillHide';

		if (Platform.OS === 'android') {
			showListenerKey = 'keyboardDidShow';
			hideListenerKey = 'keyboardDidHide';
		}
		this.keyboardShowListener = Keyboard.addListener(showListenerKey, this.keyboardShow);
		this.keyboardHideListener = Keyboard.addListener(hideListenerKey, this.keyboardHide);
	}

	componentWillUnMount() {
		this.keyboardShowListener.remove();
		this.keyboardHideListener.remove();
	}

	render() {
		const imageStyles = [
			styles.logoImage,
			{ width: this.imageSize, height: this.imageSize }
		]; 
		return (
			<View style={styles.container}>
				<Animated.Image 
					style={imageStyles}
					resizeMode='contain'
					source={logo} 
				/>
			</View>
		);
	}
	
}