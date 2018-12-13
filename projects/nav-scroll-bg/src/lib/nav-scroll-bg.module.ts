import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { NavScrollBgContainerComponent } from './components/nav-scroll-bg-container/nav-scroll-bg-container.component';
import { NavScrollBgMenuComponent } from './components/nav-scroll-bg-menu/nav-scroll-bg-menu.component';
import { NavScrollBgSectionComponent } from './components/nav-scroll-bg-section/nav-scroll-bg-section.component';

@NgModule({
  imports: [MatToolbarModule],
  declarations: [
    NavScrollBgContainerComponent,
    NavScrollBgMenuComponent,
    NavScrollBgSectionComponent
  ],
  exports: [
    NavScrollBgContainerComponent,
    NavScrollBgMenuComponent,
    NavScrollBgSectionComponent
  ]
})
export class NavScrollBgModule {}
