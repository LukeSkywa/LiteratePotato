import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }
  isShow :boolean= false;
  ngOnInit(): void {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          console.log(this.isShow)
          this.isShow = (event.urlAfterRedirects !== '/login' && event.urlAfterRedirects !== '/registration' && event.urlAfterRedirects !== '/portal/homepage'&& event.urlAfterRedirects !== '/portal/editProfile'&& event.urlAfterRedirects !=='/portal/feedback'&& event.urlAfterRedirects !=='/portal/profile')
        } 
      });
  }

  public Logout() {
    sessionStorage.clear()
    this.router.navigateByUrl('/login');
  }
}
