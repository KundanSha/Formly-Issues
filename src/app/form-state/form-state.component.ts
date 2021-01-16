import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-form-state',
  templateUrl: './form-state.component.html',
  styleUrls: ['./form-state.component.scss']
})

export class FormStateComponent implements OnInit {

  FORM_STATE;

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = { formState: { disabled: true,},};

  constructor() { }

  ngOnInit() { 
    this.FORM_STATE =  this.options.formState;
  }

  

  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'First Name',
      },
      expressionProperties: {
        // apply expressionProperty for disabled based on formState
        'templateOptions.disabled': 'formState.disabled',
      },
    },
  ];

  toggleDisabled() {
    this.options.formState.disabled = !this.options.formState.disabled;
  }

  submit() {
    alert(JSON.stringify(this.model));
  }

}
