import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';
import * as _ from 'lodash';

import { IBackgroundSectionModel, INavigationSectionModel } from '../../models';

declare const window: any;

@Component({
  selector: 'mat-nav-scroll-bg-container',
  templateUrl: './nav-scroll-bg-container.component.html',
  styleUrls: ['./nav-scroll-bg-container.component.scss']
})
export class NavScrollBgContainerComponent implements AfterViewInit, OnInit {
  private backgroundSections: IBackgroundSectionModel[];
  private navigationSections: INavigationSectionModel[];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    window.pageYOffset = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  ngOnInit(): void {
    this.navigationSections = this.setNavigationSections();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const backgroundSection = _.find(
      this.backgroundSections,
      section => section.top === section.bottom
    );
    if (_.isEmpty(this.backgroundSections) || !_.isEmpty(backgroundSection)) {
      this.backgroundSections = this.setBackgroundSections();
      console.log(this.backgroundSections);
    }
    this.clipNavigationSection();
  }

  // tslint:disable-next-line:member-ordering
  private clipNavigationSection() {
    const windowTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    _.each(this.backgroundSections, (section, idx) => {
      const clipBottom = section.bottom - windowTop;

      if (
        clipBottom <= this.navigationSections[idx].element['offsetHeight'] &&
        clipBottom >= 0
      ) {
        const clipAmount =
          this.navigationSections[idx].element['offsetHeight'] - clipBottom;
        this.setClipPath(this.navigationSections[idx].element, clipAmount);
        return false;
      } else if (
        (windowTop >= this.backgroundSections[idx].top &&
          windowTop <= this.backgroundSections[idx].bottom) ||
        windowTop < 0
      ) {
        this.setClipPath(this.navigationSections[idx].element, 0);
        return false;
      } else {
        this.setClipPath(this.navigationSections[idx].element, 100);
      }
    });
  }

  private setBackgroundSections(): IBackgroundSectionModel[] {
    const backgroundSections = document.getElementsByClassName(
      'scrollable-background-section'
    );
    return _.map(backgroundSections, section => {
      const rect = section.getBoundingClientRect();
      const backgroundSection: IBackgroundSectionModel = {
        top: rect.top,
        bottom: rect.bottom,
        backgroundColor: window
          .getComputedStyle(section, null)
          .getPropertyValue('background-color'),
        color: window.getComputedStyle(section, null).getPropertyValue('color')
      };
      return backgroundSection;
    });
  }

  private setClipPath(element: Element, clipAmount: number) {
    const value = `inset(0px 0px ${clipAmount}px 0px)`;
    this.renderer.setStyle(element, '-webkit-clip-path', value);
    this.renderer.setStyle(element, 'clip-path', value);
  }

  private setNavigationSections(): INavigationSectionModel[] {
    const navigationSections = document.getElementsByTagName('mat-toolbar');
    let navCount = navigationSections.length;
    return _.map(navigationSections, section => {
      this.setZIndex(section, navCount);
      navCount--;
      const rect = section.getBoundingClientRect();
      const navigationSection: INavigationSectionModel = {
        top: rect.top,
        bottom: rect.bottom,
        element: section
      };
      return navigationSection;
    });
  }

  private setZIndex(element: Element, index: number) {
    this.renderer.setStyle(element, 'z-index', index);
  }
}
