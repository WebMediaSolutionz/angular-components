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

import {
  PcCssMatPrimaryStyler,
  PcCssMatAccentStyler,
  PcCssMatWarnStyler
} from '../lib/core/priority';

@NgModule({
  declarations: [
    AppComponent,
    PcButtonCssMatStyler,
    PcCssMatPrimaryStyler,
    PcCssMatAccentStyler,
    PcCssMatWarnStyler,
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
    PcCssMatPrimaryStyler,
    PcCssMatAccentStyler,
    PcCssMatWarnStyler,
    PcButton,
    PcAnchor,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
