import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavScrollBgModule } from 'nav-scroll-bg';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';


@NgModule({
  declarations: [AppComponent, NavMenuComponent],
  imports: [
    BrowserModule,
    NavScrollBgModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
