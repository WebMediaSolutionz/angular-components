import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Required to prevent 'Missing Platform' errors
import { PlatformModule, StyleModule, MdRippleModule } from '@angular/material';

// These are our own component declarations
import {
  PcButtonCssMatStyler,
  PcButton,
  PcAnchor,
} from '../lib/button/button';

@NgModule({
  declarations: [
    AppComponent,
    PcButtonCssMatStyler,
    PcButton,
    PcAnchor,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PlatformModule,
    StyleModule,
    MdRippleModule,
  ],
  exports: [
    PlatformModule,
    StyleModule,
    PcButtonCssMatStyler,
    PcButton,
    PcAnchor,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
