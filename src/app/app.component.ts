import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LITERATEPOTATO';

  constructor(
    private router: Router,
  ) { }

  showHeaderFooter: boolean = false; //variabile utilizzata nell'ngIF per la visualizzazione dell'header/footer

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          console.log(this.showHeaderFooter)
          this.showHeaderFooter = (event.urlAfterRedirects !== '/login' && event.urlAfterRedirects !== '/registration' && event.urlAfterRedirects !== '/error')
          //chiamata event per nascondere header/footer
        } 
      });
  }

}
