import { isEmpty } from './validation'
export default class Validator {

	validate = (input) => {
		return !isEmpty(input)
	}
}