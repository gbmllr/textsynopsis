import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { TextOverviewComponent } from './text-overview/text-overview.component';
import { TextCompareComponent } from './text-compare/text-compare.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { JsonToHtmlService } from './json-to-html.service';
import { TextCompareService } from './text-compare.service';

@NgModule({
  declarations: [AppComponent, FooterComponent, NavComponent, TextOverviewComponent, TextCompareComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, AppBoostrapModule],
  providers: [
  JsonToHtmlService,
  TextCompareService],
  bootstrap: [AppComponent]
})
export class AppModule {}
