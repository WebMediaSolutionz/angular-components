import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdCommonModule,
  MdRippleModule,
  StyleModule
} from '@angular/material';

// These are the core components to e xport
import {
  PcPrimaryIntentStyler,
  PcSuccessIntentStyler,
  PcWarningIntentStyler,
  PcDangerIntentStyler
} from './intent';

import {
  PcLargeSizeStyler,
  PcSmallSizeStyler
} from './size';


export * from './intent';


@NgModule({
  imports: [
    CommonModule,
    MdRippleModule,
    MdCommonModule,
    StyleModule
  ],
  exports: [
    PcPrimaryIntentStyler,
    PcSuccessIntentStyler,
    PcWarningIntentStyler,
    PcDangerIntentStyler,
    PcLargeSizeStyler,
    PcSmallSizeStyler,
    MdCommonModule
  ],
  declarations: [
    PcPrimaryIntentStyler,
    PcSuccessIntentStyler,
    PcWarningIntentStyler,
    PcLargeSizeStyler,
    PcSmallSizeStyler,
    PcDangerIntentStyler
  ],
})
export class PcCoreModule {}
