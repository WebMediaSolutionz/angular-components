import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdCommonModule,
  MdRippleModule,
  StyleModule
} from '@angular/material';
import {
  PcCssMatPrimaryStyler,
  PcCssMatAccentStyler,
  PcCssMatWarnStyler
} from './priority';


export * from './priority';


@NgModule({
  imports: [
    CommonModule,
    MdRippleModule,
    MdCommonModule,
    StyleModule,
  ],
  exports: [
    PcCssMatPrimaryStyler,
    PcCssMatAccentStyler,
    PcCssMatWarnStyler,
    MdCommonModule
  ],
  declarations: [
    PcCssMatPrimaryStyler,
    PcCssMatAccentStyler,
    PcCssMatWarnStyler
  ],
})
export class PcCoreModule {}
