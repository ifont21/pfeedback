import { BadgeModule } from './../badge/badge.component';
import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';

@Component({
  selector: 'pf-badges-filter',
  templateUrl: './badges-filter.component.html',
  styleUrls: ['./badges-filter.component.scss'],
})
export class BadgesFilterComponent {
  @Input()
  options: string[] = [];

  @Output()
  filters: EventEmitter<string[]> = new EventEmitter<string[]>();

  private selectedTokens: string[] = [];

  constructor() {}

  onSelectBadge(selected: string): void {
    const foundIndex = this.selectedTokens.findIndex((s) => s === selected);
    let copySelectedTokens = this.selectedTokens.slice();

    if (foundIndex !== -1) {
      copySelectedTokens.splice(foundIndex, 1);
    } else {
      copySelectedTokens = [...copySelectedTokens, selected];
    }

    this.selectedTokens = copySelectedTokens;
    this.filters.emit(this.selectedTokens);
  }
}

@NgModule({
  imports: [CommonModule, BadgeModule],
  declarations: [BadgesFilterComponent],
  exports: [BadgesFilterComponent],
})
export class BadgesFilterModule {}
