import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RoleService } from '../services';

@Injectable()
export class SystemGuard implements CanActivate {
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

    if (!role.permissions.filter(item => item === 'system.admin')) {
      this.router.navigate(['errors', 'not-found']);
      return false;
    }

    return true;
  }
}
