import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate() {
    if (sessionStorage.getItem('user') != null) {
      return true;
    } else {
      window.alert("effettua il login per accedere a questa pagina");
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
