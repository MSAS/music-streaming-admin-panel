import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RoleService } from '../services';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private roleService: RoleService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    const role = this.roleService.currentRole();
    if (!role) {
      this.router.navigate(['login']);
      return false;
    }

    if (!role.permissions.filter(item => item === 'organization.admin')) {
      this.router.navigate(['errors', 'not-found']);
      return false;
    }

    return true;
  }
}
