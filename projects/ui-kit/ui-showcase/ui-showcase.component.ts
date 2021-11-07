import { ButtonModule } from './../buttons/button.directive';
import { Component, Input, NgModule } from '@angular/core';
import { LinkModule } from '../links/link.directive';
import { SvgIconsModule } from '@ngneat/svg-icon';

@Component({
  selector: 'pf-ui-showcase',
  templateUrl: './ui-showcase.component.html',
  styleUrls: ['./ui-showcase.component.scss'],
})
export class UiShowcaseComponent {}

@NgModule({
  declarations: [UiShowcaseComponent],
  imports: [ButtonModule, LinkModule, SvgIconsModule],
  exports: [UiShowcaseComponent],
})
export class UiShowcaseModule {}
