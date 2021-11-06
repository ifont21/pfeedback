import { AppShowCaseModule } from './app-showcase/app-showcase.component';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'product-feedback';
}

@NgModule({
  imports: [BrowserModule, AppShowCaseModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
