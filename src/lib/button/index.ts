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
  PcButtonCssMatStyler
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
    MdCommonModule
  ],
  declarations: [
    PcButton,
    PcAnchor,
    PcButtonCssMatStyler
  ],
})
export class PcButtonModule {}
