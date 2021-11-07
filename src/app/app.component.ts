import { appIconArrowLeftIcon } from '../assets/ts-icons/icon-arrow-left';
import { AppShowCaseModule } from './app-showcase/app-showcase.component';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SvgIconsModule } from '@ngneat/svg-icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'product-feedback';
}

@NgModule({
  imports: [
    BrowserModule,
    AppShowCaseModule,
    SvgIconsModule.forRoot({
      icons: [appIconArrowLeftIcon],
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
