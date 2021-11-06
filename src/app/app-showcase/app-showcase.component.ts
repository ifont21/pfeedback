import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { UiShowcaseModule } from '@feedback/ui-kit/showcase';

@Component({
  selector: 'app-showcase',
  templateUrl: './app-showcase.component.html',
})
export class AppShowcaseComponent {}

@NgModule({
  imports: [CommonModule, UiShowcaseModule],
  declarations: [AppShowcaseComponent],
  exports: [AppShowcaseComponent],
})
export class AppShowCaseModule {}
