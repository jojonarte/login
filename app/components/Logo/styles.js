import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const BOX_SIZE = Dimensions.get('window').height / 3

export default EStyleSheet.create({
	$largeLogoSize: BOX_SIZE,
	$scaledDownLogoSize: BOX_SIZE / 2,
	container: {
		alignItems: 'center',
	},
	logoImage: {
		height: '$largeLogoSize',
		width: '$largeLogoSize'
	}
});