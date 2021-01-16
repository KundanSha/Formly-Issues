import { Component, OnInit, EventEmitter,  Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.scss']
})

export class FormlyComponent implements OnInit {

  @Input() form = new FormGroup({});
  @Input() model = {};
  @Input() fields = [];
  @Input() options: FormlyFormOptions = {};
  @Output() submit = new EventEmitter<FormGroup>();

  constructor() { }

  ngOnInit() { }

  submitForm() {
    this.submit.next(this.form)
  }

}
