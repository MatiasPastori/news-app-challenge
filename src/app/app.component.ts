import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './layout/animations/animations';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {



  constructor(private themeService: ThemeService,private contexts: ChildrenOutletContexts) {

  }

  ngOnInit() {
    let root = document.querySelector(":root")
    let prefersDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkTheme && root) {
      document.body.classList.toggle('dark')
      this.themeService.setTheme('dark')
    }
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}