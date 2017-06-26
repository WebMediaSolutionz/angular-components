import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdCommonModule,
  MdRippleModule,
  StyleModule
} from '@angular/material';
import {
  PcPlaceholder,
  PcHint,
  PcErrorDirective,
  PcPrefix,
  PcSuffix,
  PcInputDirective,
  PcInputContainer
} from './input';


export * from './input';


@NgModule({
  imports: [
    CommonModule,
    MdCommonModule,
    MdRippleModule,
    StyleModule,
  ],
  exports: [
    MdCommonModule,
    PcPlaceholder,
    PcHint,
    PcErrorDirective,
    PcPrefix,
    PcSuffix,
    PcInputDirective,
    PcInputContainer
  ],
  declarations: [
    PcPlaceholder,
    PcHint,
    PcErrorDirective,
    PcPrefix,
    PcSuffix,
    PcInputDirective,
    PcInputContainer
  ],
})
export class PcInputModule { }
