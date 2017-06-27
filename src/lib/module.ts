import {NgModule} from '@angular/core';

// These supporting libraries from angular-material2 are required to make components work
import {
  PlatformModule,
  StyleModule,
  MdRippleModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Our component modules for export
import { PcCoreModule } from './core/index';
import { PcButtonModule } from './button/index';
import { PcCardModule } from './card/index';
import { PcInputModule } from './input/index';


const PULSE_COMPONENT_MODULES = [
  PlatformModule,
  StyleModule,
  MdRippleModule,
  BrowserAnimationsModule,
  PcCoreModule,
  PcButtonModule,
  PcCardModule,
  PcInputModule,
];

@NgModule({
  imports: PULSE_COMPONENT_MODULES,
  exports: PULSE_COMPONENT_MODULES,
})

// Import this to load all component modules, or import only the individual
// module libraries you'll use if you want to preserve resources.
export class PulseComponentModule { }
