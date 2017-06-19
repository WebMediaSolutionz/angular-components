import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdCommonModule,
  MdRippleModule,
  StyleModule
} from '@angular/material';
import {
  PcAnchor,
  PcButton,
  PcButtonCssMatStyler,
  PcButtonCssMatPrimaryStyler,
  PcButtonCssMatAccentStyler,
  PcButtonCssMatWarnStyler
} from './button';


export * from './button';


@NgModule({
  imports: [
    CommonModule,
    MdRippleModule,
    MdCommonModule,
    StyleModule,
  ],
  exports: [
    PcButton,
    PcAnchor,
    PcButtonCssMatStyler,
    PcButtonCssMatPrimaryStyler,
    PcButtonCssMatAccentStyler,
    PcButtonCssMatWarnStyler,
    MdCommonModule
  ],
  declarations: [
    PcButton,
    PcAnchor,
    PcButtonCssMatStyler,
    PcButtonCssMatPrimaryStyler,
    PcButtonCssMatAccentStyler,
    PcButtonCssMatWarnStyler
  ],
})
export class PcButtonModule {}
