import EStyleSheet from 'react-native-extended-stylesheet';

const GROUP_HEIGHT = 72;
const BORDER_RADIUS = 4;
const BORDER_WIDTH = 1;

export default EStyleSheet.create({
	container: { 
		width: '100%',
		backgroundColor: '$primaryColor',
		height: GROUP_HEIGHT,
	},
	textInputLabel: {
		fontSize: 12,
	},
	textInputField: {
		borderColor: '#714DB1',
		borderWidth: BORDER_WIDTH,
		borderRadius: BORDER_RADIUS,
		fontWeight: '300',
		fontSize: 18,
		paddingHorizontal: 10,
		paddingVertical: 5,
		fontStyle: 'normal',
	},
	textInputFieldPlaceholder: {
		fontStyle: 'italic'
	},
	errorLabel: {
		color: 'red',
		fontWeight: '200',
		fontSize: 10,
		fontStyle: 'italic' 
	}

});