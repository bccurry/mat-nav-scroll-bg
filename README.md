# mat-nav-scroll-bg

Angular material mat-toolbar changes background color with sections.

![Alt Text](https://media.giphy.com/media/64wKDuCpg5hK3uyZ5w/giphy.gif)

[Angular Material Navigation Scroll Background Demo](https://stackblitz.com/edit/mat-nav-scroll-bg)

### Install

```bash
npm install mat-nav-scroll-bg --save
```

### Getting Started

Quick start guide to setup a project

#### Step 1: Configure styles

Include mat-nav-scroll-bg styles globally in your application. If you're using the Angular CLI, you can add this to your `styles.scss`:

```scss
@import "mat-nav-scroll-bg/_nav-scroll-bg.scss";
```

#### Step 2: Import the component module

Import the NgModule to use the mat-nav-scroll-bg components:

```ts
import { NavScrollBgModule } from 'mat-nav-scroll-bg';

@NgModule({
  ...
  imports: [
    NavScrollBgModule
  ],
  ...
})
export class HomeModule { }
```

#### Step 3: Set up component structure

```html
<mat-nav-scroll-bg-container>
  <mat-nav-scroll-bg-section [backgroundColor]="'#31708E'" [color]="'#FFFFFF'">
    <mat-nav-scroll-bg-menu>
      <div><span>Angular Material Navigation Scroll Background</span></div>
    </mat-nav-scroll-bg-menu>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </mat-nav-scroll-bg-section>
  <mat-nav-scroll-bg-section [backgroundColor]="'#5085A5'" [color]="'#FFFFFF'">
    <mat-nav-scroll-bg-menu>
      <div><span>Angular Material Navigation Scroll Background</span></div>
    </mat-nav-scroll-bg-menu>
  </mat-nav-scroll-bg-section>
</mat-nav-scroll-bg-container>
```

### Miscellaneous Information

#### Recommended

Create a component to contain navigation menu items in order to reduce duplication:

```html
<mat-nav-scroll-bg-menu> <app-nav-menu></app-nav-menu> </mat-nav-scroll-bg-menu>
```
