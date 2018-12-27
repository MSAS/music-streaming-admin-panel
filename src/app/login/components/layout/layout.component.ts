import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tenant, User, Role } from '../../../open-age/directory/models';
import { environment } from '../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from '../../../open-age/directory/services';
import { UxService } from '../../../core/services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  user: User;
  role: Role;
  tenant: Tenant;

  @Output()
  success: EventEmitter<User> = new EventEmitter();

  login: string;
  view: string;

  constructor(
    private router: Router,
    private roleService: RoleService,
    private uxService: UxService,
    private route: ActivatedRoute,

  ) {
    this.login = environment.login;

    this.user = this.roleService.currentUser();
    this.role = this.roleService.currentRole();
    this.tenant = this.roleService.currentTenant();
    // this.view = this.route.snapshot.params['section'];

    // if (this.view === 'login') {
    //   this.roleService.logout();
    // }

    this.route.params.subscribe(params => {
      this.view = params['section'];
    });
    this.roleService.userChanges.subscribe(user => {
      this.user = user;
      this.setView();
    });

    this.roleService.roleChanges.subscribe(role => {
      this.role = role;
      this.setView();
    });

    this.setView();
  }


  ngOnInit() {
  }

  loggedIn($event: User) {
    this.user = $event;
    this.role = this.roleService.currentRole();
    this.router.navigate(['']);
  }

  setRole($event: Role) {
    this.role = $event;
    this.router.navigate(['']);
  }

  setView() {
    if (!this.user) {
      this.view = environment.login;
    } else if (!this.role || !this.role.organization) {

      if (this.user.roles.length >= 1) {
        this.view = 'dashboard';
      }
    } else {
      this.view = 'dashboard';
    }
  }


  newRoleCancelled() {
    if (this.user && this.user.roles.length > 1) {
      this.view = 'select-role';
    } else {
      //  this.roleService.logout();
    }
  }

  shouldSelectRole() {
    return this.user && this.user.roles && this.user.roles.length > 1 && this.role && !this.role.organization;
  }

  shouldAddRole() {
    return this.user && this.user.roles && this.user.roles.length === 1 && this.role && !this.role.organization;
  }

}
