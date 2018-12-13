import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavScrollBgModule } from 'mat-nav-scroll-bg';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [AppComponent, NavMenuComponent],
  imports: [BrowserModule, CommonModule, NavScrollBgModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
