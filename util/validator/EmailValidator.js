import { isValidEmail} from './validation'
import Validator from './Validator'

export default class EmailValidator extends Validator {
	constructor() {
		super();
	}
	
	validate = (input) => {
		return super.validate(input) && isValidEmail(input)
	}
}