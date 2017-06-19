import {
  Directive,
} from '@angular/core';


/**
 * Directives for associating primary, accent, and warning classes with those
 * properties.
 * @docs-private
 */
@Directive({
  selector: '[intent=primary]',
  host: {'class': 'mat-primary'}
})
export class PcPrimaryIntentStyler {}


@Directive({
  selector: '[intent=success]',
  host: {'class': 'mat-success'}
})
export class PcSuccessIntentStyler {}


@Directive({
  selector: '[intent=warning]',
  host: {'class': 'mat-warning'}
})
export class PcWarningIntentStyler {}


@Directive({
  selector: '[intent=danger]',
  host: {'class': 'mat-danger'}
})
export class PcDangerIntentStyler {}
