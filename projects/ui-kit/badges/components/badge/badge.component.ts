import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, Output } from '@angular/core';

@Component({
  selector: 'pf-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Output('select')
  selectBadge: EventEmitter<void> = new EventEmitter();

  selected = false;

  onSelect(): void {
    this.selected = !this.selected;
    this.selectBadge.emit();
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [BadgeComponent],
  exports: [BadgeComponent],
})
export class BadgeModule {}
