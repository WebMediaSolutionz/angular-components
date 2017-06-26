
import {
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  Input,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {
  MdHint,
  MdInputDirective,
  MdInputContainer
} from '@angular/material';

// Template/style dependencies
import 'material2-srcs/src/lib/input/input-container.scss';
import './input.scss';


/**
 * The placeholder directive. The content can declare this to implement more
 * complex placeholders.
 */
@Directive({
  selector: 'pc-placeholder'
})
export class PcPlaceholder {}


/** Hint text to be shown underneath (or to the right of) the input. */
@Directive({
  selector: 'pc-hint',
  host: {
    'class': 'mat-hint',
    '[class.mat-right]': 'align == "end"',
    '[attr.id]': 'id',
  }
})
export class PcHint extends MdHint {

  @Input() align: 'start' | 'end' = 'start';

}


/** Single error message to be shown underneath the input. */
@Directive({
  selector: 'pc-error',
  host: {
    'class': 'mat-input-error'
  }
})
export class PcErrorDirective { }


/** Prefix to be placed the the front of the input. */
@Directive({
  selector: '[pc-prefix]'
})
export class PcPrefix {}


/** Suffix to be placed at the end of the input. */
@Directive({
  selector: '[pc-suffix]'
})
export class PcSuffix {}


/** Marker for the input element that `PcInputContainer` is wrapping. */
@Directive({
  selector: `input[pc-input], textarea[pc-input]`,
  host: {
    'class': 'mat-input-element',
    // Native input properties that are overwritten by Angular inputs need to be synced with
    // the native input element. Otherwise property bindings for those don't work.
    '[id]': 'id',
    '[placeholder]': 'placeholder',
    '[disabled]': 'disabled',
    '[required]': 'required',
    '[attr.aria-describedby]': 'ariaDescribedby || null',
    '[attr.aria-invalid]': '_isErrorState()',
    '(blur)': '_onBlur()',
    '(focus)': '_onFocus()',
    '(input)': '_onInput()',
  }
})
export class PcInputDirective extends MdInputDirective { }


/**
 * Container for text inputs that applies Material Design styling and behavior.
 */
@Component({
  moduleId: module.id,
  selector: 'pc-input-container',
  templateUrl: 'input-container.html',
  styles: [require('material2-srcs/src/lib/input/input-container.scss'),
           require('./input.scss')],
  animations: [
    trigger('transitionMessages', [
      state('enter', style({ opacity: 1, transform: 'translateY(0%)' })),
      transition('void => enter', [
        style({ opacity: 0, transform: 'translateY(-100%)' }),
        animate('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')
      ])
    ])
  ],
  host: {
    // Remove align attribute to prevent it from interfering with layout.
    '[attr.align]': 'null',
    'class': 'mat-input-container',
    '[class.mat-input-invalid]': '_mdInputChild._isErrorState()',
    '[class.mat-focused]': '_mdInputChild.focused',
    '[class.ng-untouched]': '_shouldForward("untouched")',
    '[class.ng-touched]': '_shouldForward("touched")',
    '[class.ng-pristine]': '_shouldForward("pristine")',
    '[class.ng-dirty]': '_shouldForward("dirty")',
    '[class.ng-valid]': '_shouldForward("valid")',
    '[class.ng-invalid]': '_shouldForward("invalid")',
    '[class.ng-pending]': '_shouldForward("pending")',
    '(click)': '_focusInput()',
  },
  encapsulation: ViewEncapsulation.None,
})

export class PcInputContainer extends MdInputContainer {

  @ContentChild(PcInputDirective) _mdInputChild: PcInputDirective;

  @ContentChild(PcPlaceholder) _placeholderChild: PcPlaceholder;

  @ContentChildren(PcErrorDirective) _errorChildren: QueryList<PcErrorDirective>;

  @ContentChildren(PcHint) _hintChildren: QueryList<PcHint>;

  @ContentChildren(PcPrefix) _prefixChildren: QueryList<PcPrefix>;

  @ContentChildren(PcSuffix) _suffixChildren: QueryList<PcSuffix>;

}
