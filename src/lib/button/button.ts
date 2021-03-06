import {
  Component,
  Directive,
  ElementRef,
  ViewEncapsulation,
  HostBinding,
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
import './button.scss';


/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * It also determines if the button is `flat` and adds (or removes) appropriate
 * classnames as the case may be.
 * @docs-private
 */
@Directive({
  selector: 'button[pc-button], a[pc-button], ' +
            'button[pc-flat-button], a[pc-flat-button]',
  host: {'class': 'mat-button'}
})
export class PcButtonStyler {

  elementRef: ElementRef | null;

  // Indicates that a button should be 'raised' vs. flat (border or borderless)
  /** @internal */
  @HostBinding('class.mat-raised-button')
  get _isRaised() {
    return !this.elementRef.nativeElement.hasAttribute('pc-flat-button');
  };

  // Indicates that a button is somehow activated (selected, or whatever).
  /** @internal */
  @HostBinding('class.mat-active')
  get _isActive() {
    return this.elementRef.nativeElement.hasAttribute('active');
  };

  // Display button as a block-level element (fill available space)
  /** @internal */
  @HostBinding('class.fill')
  get _isFill() {
    return this.elementRef.nativeElement.hasAttribute('fill');
  };

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }
}


/**
 * Styled 'button' tag
 */
@Component({
  moduleId: module.id,
  selector: 'button[pc-button], button[pc-flat-button]',
  host: {
    '[disabled]': 'disabled || null',
  },
  template: require('material2-srcs/src/lib/button/button.html'),
  styles: [
    require('material2-srcs/src/lib/button/button.scss'),
    require('./button.scss')
  ],
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
  selector: `a[pc-button], a[pc-flat-button]`,
  host: {
    '[attr.disabled]': 'disabled || null',
    '[attr.aria-disabled]': '_isAriaDisabled',
    '(click)': '_haltDisabledEvents($event)',
  },
  inputs: ['disabled', 'color'],
  template: require('material2-srcs/src/lib/button/button.html'),
  styles: [
    require('material2-srcs/src/lib/button/button.scss'),
    require('./button.scss')
  ],
  encapsulation: ViewEncapsulation.None
})

export class PcAnchor extends MdAnchor { }
