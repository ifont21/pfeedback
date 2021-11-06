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
  selector: '[pfLink]',
})
export class LinkDirective implements OnInit {
  @Input()
  pfLink!: 'primary' | 'secondary';

  @Input()
  withIcon = true;

  constructor(private ref: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.ref.nativeElement, `btn`);
    this.renderer.addClass(this.ref.nativeElement, `btn--link-${this.pfLink}`);
    this.renderer.addClass(
      this.ref.nativeElement,
      this.withIcon ? 'btn--with-icon' : ''
    );
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [LinkDirective],
  exports: [LinkDirective],
})
export class LinkModule {}
