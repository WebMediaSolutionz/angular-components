import {
  Directive,
} from '@angular/core';


/**
 * Directives for associating a size with an element
 * @docs-private
 */
@Directive({
  selector: '[size=small], [size=s], [size=sm]',
  host: {'class': 'size-small'}
})
export class PcSmallSizeStyler {}


@Directive({
  selector: '[size=large], [size=l], [size=lg]',
  host: {'class': 'size-large'}
})
export class PcLargeSizeStyler {}

