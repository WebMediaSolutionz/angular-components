
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Directive
} from '@angular/core';

// Inherit Material Design's template and style
import 'material2-srcs/src/lib/card/card.html';
import './card-header.html';
import 'material2-srcs/src/lib/card/card-title-group.html';
import 'material2-srcs/src/lib/card/card.scss';
import './card.scss';

@Directive({
  selector: 'pc-card-content',
  host: {'class': 'mat-card-content'}
})
export class PcCardContent { }

/**
 * Title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: 'pc-card-title, [pc-card-title]',
  host: {
    'class': 'mat-card-title '
  }
})
export class PcCardTitle { }

/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: 'pc-card-subtitle, [pc-card-subtitle]',
  host: {
    'class': 'mat-card-subtitle'
  }
})
export class PcCardSubtitle { }

/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: 'pc-card-actions',
  host: {'class': 'mat-card-actions'}
})
export class PcCardActions { }

/**
 * Footer of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: 'pc-card-footer',
  host: {'class': 'mat-card-footer'}
})
export class PcCardFooter { }

/**
 * Images used in cards
 * @docs-private
 */
@Directive({
  selector: '[pc-card-image]',
  host: {'class': 'mat-card-image'}
})
export class PcCardImage {}

@Directive({
  selector: '[pc-card-sm-image]',
  host: {'class': 'mat-card-sm-image'}
})
export class PcCardSmImage {}

@Directive({
  selector: '[pc-card-pc-image]',
  host: {'class': 'mat-card-pc-image'}
})
export class PcCardMdImage {}

@Directive({
  selector: '[pc-card-lg-image]',
  host: {'class': 'mat-card-lg-image'}
})
export class PcCardLgImage {}

@Directive({
  selector: '[pc-card-xl-image]',
  host: {'class': 'mat-card-xl-image'}
})
export class PcCardXlImage {}


/**
 * Avatar image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */
@Directive({
  selector: '[pc-card-avatar]',
  host: {'class': 'mat-card-avatar'}
})
export class PcCardAvatar {}


/**
 * A basic content container component that adds the styles of a Material design card.
 *
 * While this component can be used alone, it also provides a number
 * of preset styles for common card sections, including:
 * - pc-card-title
 * - pc-card-subtitle
 * - pc-card-content
 * - pc-card-actions
 * - pc-card-footer
 */
@Component({
  moduleId: module.id,
  selector: 'pc-card',
  template: require('material2-srcs/src/lib/card/card.html'),
  styles: [require('material2-srcs/src/lib/card/card.scss'),
           require('./card.scss')],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'class': 'mat-card'}
})
export class PcCard { }


/**
 * Component intended to be used within the `<pc-card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * @docs-private
 */
@Component({
  moduleId: module.id,
  selector: 'pc-card-header',
  template: require('./card-header.html'),
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'class': 'mat-card-header'}
})
export class PcCardHeader {}


/**
 * Component intended to be used within the <pc-card> component. It adds styles for a preset
 * layout that groups an image with a title section.
 * @docs-private
 */
@Component({
  moduleId: module.id,
  selector: 'pc-card-title-group',
  template: require('material2-srcs/src/lib/card/card-title-group.html'),
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'class': 'mat-card-title-group'}
})
export class PcCardTitleGroup {}
