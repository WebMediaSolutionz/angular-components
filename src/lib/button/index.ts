import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdCommonModule,
  MdRippleModule,
  StyleModule
} from '@angular/material';
import {
  PcButtonStyler,
  PcAnchor,
  PcButton
} from './button';


export * from './button';


@NgModule({
  imports: [
    CommonModule,
    MdCommonModule,
    MdRippleModule,
    StyleModule,
  ],
  exports: [
    PcButtonStyler,
    PcButton,
    PcAnchor,
    MdCommonModule
  ],
  declarations: [
    PcButtonStyler,
    PcButton,
    PcAnchor
  ],
})
export class PcButtonModule {}
