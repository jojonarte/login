import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const BOX_SIZE = Dimensions.get('window').height / 3

export default EStyleSheet.create({
	container: {
		alignItems: 'center',
	},
	logoImage: {
		height: BOX_SIZE,
		width: BOX_SIZE
	}
});