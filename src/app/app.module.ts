import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './shared/angualr-material.module';
import { FormlyConfigurationModule } from './shared/angualr-formly/formly-configuration.module';
import { FormStateComponent } from './form-state/form-state.component';


@NgModule({
  declarations: [
    AppComponent,
    FormStateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormlyConfigurationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
