import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {

  constructor(public router: Router){}

  canActivate(): boolean {
    let fezDoacao = localStorage.getItem('fezdoacao');
    if (fezDoacao == null || fezDoacao == undefined) {
      this.router.navigate(['doacao']);
      return false;
    }
    return true;
  }
}
