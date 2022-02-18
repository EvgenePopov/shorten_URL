import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { Directive } from '@angular/core';

export function phoneValidator (): ValidatorFn{
  return (control: AbstractControl) : ValidationErrors | null => {
    const hasUrl = /(http|https):\/\/([\w.]+\/?)\S*/.test(control.value);

    if(hasUrl) {
      return null;
    }

    return {originalUrl: true};
  }
}

@Directive({
  selector: '[Validator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidatorDirective,
    multi: true
  }]
})
export class ValidatorDirective implements Validator{
  validate(control: AbstractControl): ValidationErrors | null {
    return phoneValidator()(control);
  }
}
