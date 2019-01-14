import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RoleService } from '../services';


@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private router: Router,
    private roleService: RoleService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // if (next.url && next.url[0] && next.url[0].path === 'errors') {
    //   return true;
    // }

    const roleKey = next.queryParams['role-key'];

    const tenantCode = next.queryParams['tenant-code'];
    if (tenantCode) {
      this.roleService.setTenantCode(tenantCode);
    }
    const tenant = this.roleService.currentTenant();
    const currentRole = this.roleService.currentRole();

    if ((!currentRole && roleKey) || (currentRole && roleKey && currentRole.key !== roleKey)) {
      return this.roleService.setRoleKey(roleKey).map(role => {
        return true;
      });
    }

    if (!currentRole) {
      if (tenant) {
        this.router.navigate(['/', 'login']);
      } else {
        this.router.navigate(['errors', 'not-found']);
      }
      return false;
    }

    return true;
  }
}
