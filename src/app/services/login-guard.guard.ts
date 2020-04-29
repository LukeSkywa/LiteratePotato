import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private router:Router ){}
  canActivate() {
    if (sessionStorage.getItem('user') != null) {
      this.router.navigateByUrl('/home');
      return false
    } else {
      return true;
    }
  }
  
}
