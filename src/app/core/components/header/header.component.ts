import { Component, OnInit, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import { Nav, Menu, Link } from '@open-age/ng-structures';
import { UxService } from '../../services';
import { MatSnackBar, MatDrawer } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Tenant, User, Role } from '../../../open-age/directory/models';
import { RoleService } from '../../../open-age/directory/services';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input()
  sideNav: MatDrawer;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  errors: string[] = [];
  breadcrumb: Link[] = [];

  tenant: Tenant;
  user: User;
  role: Role;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private uxService: UxService,
    private roleService: RoleService,
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,
    public snackBar: MatSnackBar) {

    const tenantCode = environment.tenant ? environment.tenant.code : route.snapshot.queryParams['tenant-code'];
    this.tenant = new Tenant(environment.tenants[tenantCode]);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    uxService.errors.subscribe(error => {
      this.snackBar.open(error, null, { duration: 5000, verticalPosition: 'top', extraClasses: ['error'] });
      this.errors.push(error);
      // this.cleanErrors();
    });

    roleService.userChanges.subscribe(user => {
      this.user = user;
    });

    roleService.roleChanges.subscribe(role => {
      this.role = role;
    });

    this.uxService.breadcrumbChanges.subscribe(links => {
      this.breadcrumb = links || [];
    });
  }

  private cleanErrors() {
    if (this.errors.length > 0) {
      this.errors.splice(0, 1);
      setTimeout(this.cleanErrors, 2000);
    }
  }


  join() {
    this.router.navigateByUrl(this.tenant.joinUrl);
  }
  logout = () => {
    this.roleService.logout();
    this.router.navigate(['login']);
  }

  ngOnInit() {
    if (!this.mobileQuery.matches) {
      this.sideNav.open();
    }
    this.user = this.roleService.currentUser();
    this.role = this.roleService.currentRole();

  }

  ngOnChanges() {
    this.user = this.roleService.currentUser();
    this.role = this.roleService.currentRole();
  }

}
