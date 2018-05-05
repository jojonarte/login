import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 64;
const BORDER_RADIUS = 4;
const BORDER_WIDTH = 1;

export default EStyleSheet.create({
	container: { 
		width: '100%',
		backgroundColor: '$primaryColor',
		height: INPUT_HEIGHT,
	},
	textInputLabel: {
		fontSize: 12,
	},
	textInputField: {
		flex: 1,
		flexDirection: 'row',
		borderColor: '#714DB1',
		borderWidth: BORDER_WIDTH,
		borderRadius: BORDER_RADIUS,
		fontWeight: '300',
		fontSize: 18,
		paddingLeft: 10,
		fontStyle: 'normal'
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