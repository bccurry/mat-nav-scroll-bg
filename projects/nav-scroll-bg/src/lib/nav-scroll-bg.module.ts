import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import {
  NavScrollBgContainerComponent,
  NavScrollBgSectionComponent,
  NavScrollBgMenuComponent
} from './components';

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
