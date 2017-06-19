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
  PcButtonStyler
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
    PcButtonStyler,
    MdCommonModule
  ],
  declarations: [
    PcButton,
    PcAnchor,
    PcButtonStyler
  ],
})
export class PcButtonModule {}
