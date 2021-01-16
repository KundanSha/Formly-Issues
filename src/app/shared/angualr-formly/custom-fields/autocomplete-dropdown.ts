import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/material';

@Component({
    selector : 'formly-ng-select',
    template : `
    <div class = 'mat-input-infix mat-form-field-infix dropdown' style='display: flex; width: 100%;'>
        <ng-select style='width: 100%;' class='dropdown'
            [items] = 'to.options'
            [placeholder] = 'to.label'
            [bindValue] = "to.bindValue || 'value'"
            [formControl] = 'formControl'
            [class.is-invalid] = 'showError'
        >
        </ng-select>
    </div>

    `,
    styles : ['.dropdown:hover{ cursor: pointer;}']
})

export class NgAutoDropdownFormlyComponent extends FieldType { 

}