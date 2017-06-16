import {
  Component,
  Directive,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

// Inherit Material Design's button
import {
  MdButton,
  MdAnchor
} from '@angular/material';

// Inherit Material Design's template and style
import 'material2-srcs/src/lib/button/button.html';
import 'material2-srcs/src/lib/button/button.scss';


/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
@Directive({
  selector: 'button[pc-button], a[pc-button]',
  host: {'class': 'mat-button'}
})
export class PcButtonCssMatStyler {}


/**
 * Styled 'button' tag
 */
@Component({
  moduleId: module.id,
  selector: 'button[pc-button]',
  host: {
    '[disabled]': 'disabled || null',
  },
  template: require('material2-srcs/src/lib/button/button.html'),
  styles: [require('material2-srcs/src/lib/button/button.scss')],
  inputs: ['disabled', 'color'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PcButton extends MdButton { }


/**
 * Styled 'anchor' tag
 */
@Component({
  moduleId: module.id,
  selector: `a[pc-button]`,
  host: {
    '[attr.disabled]': 'disabled || null',
    '[attr.aria-disabled]': '_isAriaDisabled',
    '(click)': '_haltDisabledEvents($event)',
  },
  inputs: ['disabled', 'color'],
  template: require('material2-srcs/src/lib/button/button.html'),
  styles: [require('material2-srcs/src/lib/button/button.scss')],
  encapsulation: ViewEncapsulation.None
})

export class PcAnchor extends MdAnchor { }
