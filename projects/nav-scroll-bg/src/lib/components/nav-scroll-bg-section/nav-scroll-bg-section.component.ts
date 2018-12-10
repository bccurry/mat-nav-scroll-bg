import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mat-nav-scroll-bg-section',
  templateUrl: './nav-scroll-bg-section.component.html',
  styleUrls: ['./nav-scroll-bg-section.component.scss']
})
export class NavScrollBgSectionComponent implements OnInit {
  @Input()
  backgroundColor: string;
  @Input()
  color: string;

  constructor() {}

  ngOnInit() {}
}
