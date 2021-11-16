import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FormComponent } from './form/form.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeScreenComponent } from './home-screen/home-screen.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,

    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    FlexLayoutModule

    HomeScreenComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MatToolbarModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
