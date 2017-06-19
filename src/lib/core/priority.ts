import {
  Directive,
} from '@angular/core';


/**
 * Directives for associating primary, accent, and warning classes with those
 * properties.
 * @docs-private
 */
@Directive({
  selector: '[primary], [primary]',
  host: {'class': 'mat-primary'}
})
export class PcCssMatPrimaryStyler {}


@Directive({
  selector: '[accent], [accent]',
  host: {'class': 'mat-accent'}
})
export class PcCssMatAccentStyler {}


@Directive({
  selector: '[warn], [warn]',
  host: {'class': 'mat-warn'}
})
export class PcCssMatWarnStyler {}
