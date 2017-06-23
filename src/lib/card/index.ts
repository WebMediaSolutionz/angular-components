import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdCommonModule,
  MdRippleModule,
  StyleModule
} from '@angular/material';
import {
  PcCardContent,
  PcCardTitle,
  PcCardSubtitle,
  PcCardActions,
  PcCardFooter,
  PcCardImage,
  PcCardSmImage,
  PcCardMdImage,
  PcCardLgImage,
  PcCardXlImage,
  PcCardAvatar,
  PcCard,
  PcCardHeader,
  PcCardTitleGroup
} from './card';


export * from './card';


@NgModule({
  imports: [
    CommonModule,
    MdCommonModule,
    MdRippleModule,
    StyleModule,
  ],
  exports: [
    MdCommonModule,
    PcCardContent,
    PcCardTitle,
    PcCardSubtitle,
    PcCardActions,
    PcCardFooter,
    PcCardImage,
    PcCardSmImage,
    PcCardMdImage,
    PcCardLgImage,
    PcCardXlImage,
    PcCardAvatar,
    PcCard,
    PcCardHeader,
    PcCardTitleGroup
  ],
  declarations: [
    PcCardContent,
    PcCardTitle,
    PcCardSubtitle,
    PcCardActions,
    PcCardFooter,
    PcCardImage,
    PcCardSmImage,
    PcCardMdImage,
    PcCardLgImage,
    PcCardXlImage,
    PcCardAvatar,
    PcCard,
    PcCardHeader,
    PcCardTitleGroup
  ],
})
export class PcCardModule { }
