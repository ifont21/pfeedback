import { BadgesFilterModule } from './../badges/components/badges-filter/badges-filter.component';
import { VotesModule } from './../votes/votes.component';
import { ButtonModule } from './../buttons/button.directive';
import { Component, Input, NgModule } from '@angular/core';
import { LinkModule } from '../links/link.directive';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pf-ui-showcase',
  templateUrl: './ui-showcase.component.html',
  styleUrls: ['./ui-showcase.component.scss'],
})
export class UiShowcaseComponent {
  badgesFilterOptions = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  filters: string[] = [];

  showFilters(selected: string[]) {
    this.filters = selected;
  }
}

@NgModule({
  declarations: [UiShowcaseComponent],
  imports: [
    CommonModule,
    ButtonModule,
    LinkModule,
    SvgIconsModule,
    VotesModule,
    BadgesFilterModule,
  ],
  exports: [UiShowcaseComponent],
})
export class UiShowcaseModule {}
