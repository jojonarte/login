import PasswordValidator from './PasswordValidator';
import EmailValidator from './EmailValidator';
import GenericValidator from './GenericValidator';

export const passwordValidator = new PasswordValidator();
export const emailValidator = new EmailValidator();
export const validator = new GenericValidator();