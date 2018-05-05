import { isValidPassword} from './validation'
import Validator from './Validator'

export default class PasswordValidator extends Validator {
	constructor() {
		super();
	}

	validate = (input) => {
		return super.validate(input) && isValidPassword(input)
	}
}