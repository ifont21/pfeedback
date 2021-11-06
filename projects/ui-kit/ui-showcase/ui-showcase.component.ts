import { ButtonModule } from './../buttons/button.directive';
import { Component, NgModule } from '@angular/core';
import { LinkModule } from '../links/link.directive';

@Component({
  selector: 'pf-ui-showcase',
  templateUrl: './ui-showcase.component.html',
  styleUrls: ['./ui-showcase.component.scss'],
})
export class UiShowcaseComponent {
  constructor() {}
}

@NgModule({
  declarations: [UiShowcaseComponent],
  imports: [ButtonModule, LinkModule],
  exports: [UiShowcaseComponent],
})
export class UiShowcaseModule {}
