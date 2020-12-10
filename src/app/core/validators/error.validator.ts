import {AbstractControl, ValidationErrors, Validators} from '@angular/forms';
import {EmailRegex} from './patterns.regex';

export class CustomeValidators {
  static isNumber(control: AbstractControl): ValidationErrors {
    if (isNaN(control.value)) {
      return {
        message: 'the amount value is not a number',
      };
    }
    return null;
  }
  static isGreaterThanZero(control: AbstractControl): ValidationErrors {
    if (!isNaN(control.value) && control.value <= 0) {
      return {
        message: 'the amount value should be greater than zero',
      };
    }
    return null;
  }

  static customEmailValidator(control: AbstractControl): ValidationErrors {
    const regex = RegExp(EmailRegex);
    console.log(Validators.email(control.value));
    if (!control.value || control.value === '' || !regex.test(control.value)) {
      return {message: 'email is not valid'};
    }
    return null;
  }
}
