import { Component, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-addons',
  template: `
  <ng-template #matPrefix>
    <span class='icon-class'
      *ngIf="to.addonLeft"
      [ngStyle]="{cursor: to.addonLeft.onClick ? 'pointer' : 'inherit'}"
      (click)="addonLeftClick($event)"
      style='display: inline-block !important;'
    >
      <mat-icon *ngIf="to.addonLeft.icon">{{ to.addonLeft.icon }}</mat-icon>&nbsp;
      <span *ngIf="to.addonLeft.text">{{ to.addonLeft.text }}</span>&nbsp;
    </span>
  </ng-template>

  <ng-container #fieldComponent></ng-container>

  <ng-template #matSuffix>
    <span
      *ngIf="to.addonRight"
      [ngStyle]="{cursor: to.addonRight.onClick ? 'pointer' : 'inherit'}"
      (click)="addonRightClick($event)"
    >
      &nbsp;<mat-icon class='icon' style='display: inline-block;' *ngIf="to.addonRight.icon"

      matTooltip="{{to.tooltip.matTooltip}}" matTooltipPosition='{{to.tooltip.matTooltipPosition}}' matTooltipHideDelay='{{to.tooltip.matTooltipHideDelay}}'

      >{{ to.addonRight.icon }}</mat-icon>
      &nbsp;<span *ngIf="to.addonRight.text">{{ to.addonRight.text }}</span>
    </span>
  </ng-template>
  `,
  styles: ['h1 { font-weight: normal; }',
    '.icon:hover {transform: scale(1.1); cursor: pointer;}'
  ]
})

export class FormlyWrapperAddons extends FieldWrapper implements AfterViewInit {
  @ViewChild('matPrefix', {static : true}) matPrefix: TemplateRef<any>;
  @ViewChild('matSuffix', {static : true}) matSuffix: TemplateRef<any>;

  ngAfterViewInit() {
    if (this.matPrefix) {
      Promise.resolve().then(() => this.to.prefix = this.matPrefix);
    }

    if (this.matSuffix) {
      Promise.resolve().then(() => this.to.suffix = this.matSuffix);
    }
  }

  addonRightClick($event: any) {
    if (this.to.addonRight.onClick) {
      this.to.addonRight.onClick(this.to, this, $event);
    }
  }

  addonLeftClick($event: any) {
    if (this.to.addonLeft.onClick) {
      this.to.addonLeft.onClick(this.to, this, $event);
    }
  }
}
