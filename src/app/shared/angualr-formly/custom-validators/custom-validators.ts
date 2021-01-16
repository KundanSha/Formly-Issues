import { FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { RxwebValidators } from '@rxweb/reactive-form-validators';


export function ipValidator(control : FormControl) :  ValidationErrors{
    console.log('control = ', control);
    return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : {ip : true}
  }
  
  export function emailValidator(control: FormControl): ValidationErrors {
    return RxwebValidators.email()(control);
  }
  
  export function emailMessage(err, field: FormlyFieldConfig) {
    return  'Email not valideee';
  }
  
  export function validatorMessage(error, field : FormlyFieldConfig){
    console.log(error, field);
    return `'${field.formControl.value}' is not valid input for this field.`;
  }