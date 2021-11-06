import { CommonModule } from '@angular/common';
import {
  Directive,
  ElementRef,
  Input,
  NgModule,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[pfButton]',
})
export class ButtonDirective implements OnInit {
  @Input()
  pfButton: 'primary' | 'secondary' | 'tertiary' | 'alternative' = 'primary';

  constructor(private renderer2: Renderer2, private ref: ElementRef) {}

  ngOnInit() {
    this.renderer2.addClass(this.ref.nativeElement, `btn`);
    this.renderer2.addClass(this.ref.nativeElement, `btn--${this.pfButton}`);
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonDirective],
  exports: [ButtonDirective],
})
export class ButtonModule {}
