import { Component } from '@angular/core';
import { Theme } from './theme.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mat-nav-scroll-bg';
  theme = Theme;

  constructor() {}
}
