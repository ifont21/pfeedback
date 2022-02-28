import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';

@Component({
  selector: 'pf-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Output('selected')
  selectedOption: EventEmitter<{ key: string; value: string }> =
    new EventEmitter<{ key: string; value: string }>();

  @Input()
  label!: string;

  @Input()
  options: { key: string; value: string }[] = [];

  selected = {
    key: 'most_upvotes',
    value: 'Most Upvotes',
  };
  open = false;

  constructor() {}

  toggleOpen(): void {
    this.open = !this.open;
  }

  pick(option: { key: string; value: string }): void {
    this.selected = option;
    this.selectedOption.emit(this.selected);
  }
}

@NgModule({
  imports: [CommonModule, SvgIconsModule],
  declarations: [SelectComponent],
  exports: [SelectComponent],
})
export class SelectModule {}
