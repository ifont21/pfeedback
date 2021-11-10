import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  NgModule,
  Output,
} from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';

@Component({
  selector: 'pf-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VotesComponent {
  vote = 0;

  @Output('voted')
  voted: EventEmitter<number> = new EventEmitter<number>();

  onVoted() {
    this.vote++;
    this.voted.emit(this.vote);
  }
}

@NgModule({
  imports: [CommonModule, SvgIconsModule],
  declarations: [VotesComponent],
  exports: [VotesComponent],
})
export class VotesModule {}
