import { NgModule } from '@angular/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
//import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
//import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
//import { RepeatTypeComponent } from '../../stepper-forms/stepper-forms/repeat-section';
import { FormlyWrapperAddons } from './addons/addons.wrapper';
import { addonsExtension } from './addons/addons.extension';
import { AngularMaterialModule } from '../angualr-material.module';

import { ipValidator, emailValidator, emailMessage, validatorMessage } from './custom-validators/custom-validators';
import { FormlyComponent } from './formly/formly.component';
import { NgAutoDropdownFormlyComponent } from './custom-fields/autocomplete-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { FormlyFieldStepper } from './addons/stepper/stepper.type';

@NgModule({
    declarations : [
      FormlyWrapperAddons,
      FormlyComponent,
      NgAutoDropdownFormlyComponent,
      FormlyFieldStepper,
      //RepeatTypeComponent,
      
    ],

    imports : [
        CommonModule,
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule ,
        NgSelectModule,
        //RxReactiveFormsModule,
        ReactiveFormsModule,
        //FormlyMatToggleModule,
        FormlyModule.forRoot({
          types: [
            //{ name: 'repeat', component: RepeatTypeComponent },
            { name: 'autocomplete-dropdown', component : NgAutoDropdownFormlyComponent },
            { name: 'stepper', component: FormlyFieldStepper, wrappers: ['form-field'] },
          ],
            validators :[
              { name : 'ipValidation', validation : ipValidator},
              { name: 'SMTPHost', validation: emailValidator },
            ],
            validationMessages: [
              { name: 'required', message: 'This field is required' },
              { name: 'SMTPHost', message: emailMessage },
            ],           
            wrappers: [ 
              { name: 'addons', component: FormlyWrapperAddons },
            ],
            extensions: [
              { name: 'addons', extension: { onPopulate: addonsExtension } },
            ],
            extras: { checkExpressionOn: 'modelChange' },
          }),
        FormlyMaterialModule,
    ],
    exports : [
        //RxReactiveFormsModule,
        //AngularMaterialModule,
        ReactiveFormsModule,
        //FormlyMatToggleModule,
        FormlyMaterialModule,
        FormlyModule
    ]
})

export class FormlyConfigurationModule{ }

/*
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
*/