import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let permissions: string[] = JSON.parse(<string>localStorage.getItem('roles'))
    if(permissions.includes("ADMIN")) return true;

    else {
      this.router.navigate(['/access-denied'])
      return false;
      
    }
  }
}
