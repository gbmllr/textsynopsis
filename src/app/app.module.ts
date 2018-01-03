import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, NavComponent, GridComponent],
  imports: [BrowserModule, AppBoostrapModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
