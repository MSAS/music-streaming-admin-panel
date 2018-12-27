import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RoleService } from '../services';

@Injectable()
export class GuestGuard implements CanActivate {
  constructor(
    private router: Router,
    private roleService: RoleService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const currentRole = this.roleService.currentRole();
    if (!currentRole || !currentRole.organization) {
      return true;
    }

    return false;
  }
}
