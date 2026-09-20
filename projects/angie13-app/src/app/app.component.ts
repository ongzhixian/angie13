import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'angie13-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angie 13';
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    // Keep ngOnInit clean by just calling the setup method
    this.setupPageTitleListener();
  }


  /**
   * Listens to router events and automatically updates the browser tab title
   */
  private setupPageTitleListener(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.getDeepestChildRoute(this.activatedRoute)),
      map(route => route.snapshot.data['title'])
    ).subscribe((routeTitle: string | undefined) => {
      this.updateTitle(routeTitle);
    });
  }


  /**
   * Recursively traverses down the route tree to find the deepest active child route
   */
  private getDeepestChildRoute(route: ActivatedRoute): ActivatedRoute {
    let child = route;
    while (child.firstChild) {
      child = child.firstChild;
    }
    return child;
  }


  /**
   * Updates the browser title with a fallback default
   */
  private updateTitle(title: string | undefined): void {
    const baseTitle = title ?? this.title;
    this.titleService.setTitle(baseTitle);
    // if (title) {
    //   this.titleService.setTitle(`${title} - ${baseTitle}`);
    // } else {
    //   this.titleService.setTitle(baseTitle);
    // }
  }
}
