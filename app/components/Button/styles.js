import EStyleSheet from 'react-native-extended-stylesheet';

const BORDER_RADIUS = 4;
const BUTTON_HEIGHT = 48;

export default EStyleSheet.create({
	container: {
		width: '100%',
		borderRadius: BORDER_RADIUS,
		backgroundColor: '$primaryPurple',
		alignItems: 'center',
		justifyContent: 'center',
		height: BUTTON_HEIGHT,
		marginVertical: 16
	},
	disabledContainer: {
		backgroundColor: '$lighterPurple'
	},
	text: {
		color: '$whiteColor',
		fontWeight: 'bold',
		fontSize: 16 
	},
	wrapper: {
		alignItems: 'center'
	}
});