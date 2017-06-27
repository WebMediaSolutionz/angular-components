import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Required to prevent 'Missing Platform' errors
import { PlatformModule, StyleModule, MdRippleModule } from '@angular/material';

// Required to prevent animation problems
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// These are our own libraries, imported as modules so we don't have to
// explicitly import each individual control.
import { PcCoreModule } from '../lib/core/index';
import { PcButtonModule } from '../lib/button/index';
import { PcCardModule } from '../lib/card/index';
import { PcInputModule } from '../lib/input/index';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    PlatformModule,
    BrowserAnimationsModule,
    MdRippleModule,
    StyleModule,
    PcCoreModule,
    PcButtonModule,
    PcCardModule,
    PcInputModule,
  ],
  exports: [
    PlatformModule,
    StyleModule,
    BrowserAnimationsModule,
    PcCoreModule,
    PcButtonModule,
    PcCardModule,
    PcInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
