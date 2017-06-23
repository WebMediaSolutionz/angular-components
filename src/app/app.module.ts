import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Required to prevent 'Missing Platform' errors
import { PlatformModule, StyleModule, MdRippleModule } from '@angular/material';

// These are our own libraries, imported as modules so we don't have to
// explicitly import each individual control.
import { PcCoreModule } from '../lib/core/index';
import { PcButtonModule } from '../lib/button/index';
import { PcCardModule } from '../lib/card/index';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PlatformModule,
    MdRippleModule,
    StyleModule,
    PcCoreModule,
    PcButtonModule,
    PcCardModule,
  ],
  exports: [
    PlatformModule,
    StyleModule,
    PcCoreModule,
    PcButtonModule,
    PcCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
