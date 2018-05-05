import { isEmpty, isValidEmail, isValidPassword } from './validation'
export default class GenericValidator {

	validateEmail = (input) => {
		return !isEmpty(input) && isValidEmail(input)
	}

	validatePassword = (input) => {
		return !isEmpty(input) && isValidPassword(input)
	}
}