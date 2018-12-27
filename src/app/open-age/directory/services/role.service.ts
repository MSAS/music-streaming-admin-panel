import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericApi } from '@open-age/ng-api';

import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Role, User, Session } from '../models';
import { Organization } from '../models/organization.model';
import { Employee } from '../models/employee.model';
import { Student } from '../models/student.model';
import { Tenant } from '../models/tenant.model';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { UxService } from '../../../core/services/ux.service';

@Injectable()
export class RoleService {

  private _tenant: Tenant;
  private _role: Role;
  private _user: User;
  private _authApi: GenericApi<any>;
  private _rolesApi: GenericApi<Role>;
  private _sessionsApi: GenericApi<Session>;

  private _roleSubject = new Subject<Role>();
  private _userSubject = new Subject<User>();

  roleChanges = this._roleSubject.asObservable();
  userChanges = this._userSubject.asObservable();


  newUser(user: any) {
    this._userSubject.next(user);
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: Http,
    private uxService: UxService
  ) {

    const tenantCode = environment.tenant ? environment.tenant.code : route.snapshot.queryParams['tenant-code'];
    const orgCode = environment.organization ? environment.organization.code : route.snapshot.queryParams['org-code'];

    const headers = [{
      key: 'x-role-key',
      value: () => localStorage.getItem('role-key')
    }, {
      key: 'x-org-code',
      value: orgCode
    }, {
      key: 'x-tenant-code',
      value: () => this.currentTenant().code
    }];

    this._authApi = new GenericApi(environment.apiUrls.directory, 'users', this.http, headers);
    this._rolesApi = new GenericApi(environment.apiUrls.directory, 'roles', this.http, headers);
    this._sessionsApi = new GenericApi(environment.apiUrls.directory, 'sessions', this.http, headers);
  }

  private _defaultRole(user: User): Role {
    // user.roles.length
    return user.roles.find((item) => !item.organization);
  }
  // user:any;
  private _extractRole(user: User): Role {
    let defaultRole = this._defaultRole(user);

    const roleKey = localStorage.getItem('role-key');

    if (!roleKey) {
      if (user.roles.length === 2) {
        user.roles.forEach(item => {
          if (!!item.organization) {
            defaultRole = item;
          }
        });
      }

      return defaultRole;
    }

    const role = user.roles.find(item => item.key === roleKey);

    // if (!role) {
    //   localStorage.removeItem('role-key');
    // } else {
    //   localStorage.setItem('role-key', role.key);
    // }
    return role;
  }

  private _setRole(role: Role) {
    this._role = role;
    if (role) {
      localStorage.setItem('role-key', role.key);
    } else {
      localStorage.removeItem('role-key');
    }
    this._roleSubject.next(this._role);
    if (this._role && this._role.organization) {
      this.uxService.exitFullScreen();
    } else {
      this.uxService.setFullScreen();
    }
    return role;
  }

  private _setUser(user: User) {
    this._user = user;
    localStorage.setItem('user', JSON.stringify(this._user));
    this._userSubject.next(this._user);
    return user;
  }

  private _setTenant(tenant: Tenant) {
    this._tenant = tenant;
    localStorage.setItem('tenant-code', tenant.code);
    // TODO:
    // this._tenantSubject.next(this._tenant);
    return tenant;
  }

  signup(userId: string): Observable<any> {
    const model: any = {
    };

    if (userId.match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|glass|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)) {
      model.email = userId;
    } else if (userId.match(/^\d{10}$/)) {
      model.phone = userId;
    } else if (userId.match(/^(\+\d{1,3}[- ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
      model.phone = userId;
    } else if (userId.match(/^(\+\d{1,3}[- ]?)?\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)) {
      model.phone = userId;
    } else {
      throw new Error('mobile or email is required');
    }

    return this._authApi.create(model);

    /**
     * {
     *  id: string
     * }
     */
  }

  verify(id: string, otp: string): Observable<User> {
    let data = {
      id: id,
      // mobile: '',
      // email: '',
      otp: otp
    }
    return this._authApi.post(data,'confirm').map(data => {
      const user = this._setUser(new User(data));
      const role = this._extractRole(user);
      this._setRole(role);
      return user;
    });
  }

  refreshUser() {
    const currentUser = this.currentUser();
    if (currentUser) {
      const orgCode = environment.organization ? environment.organization.code : this.route.snapshot.queryParams['org-code'];
      const tenantCode = environment.tenant ? environment.tenant.code : this.route.snapshot.queryParams['tenant-code'];

      const defaultRole = this._defaultRole(currentUser);
      const headers = [{
        key: 'x-role-key',
        value: defaultRole.key
      }, {
        key: 'x-org-code',
        value: orgCode
      }, {
        key: 'x-tenant-code',
        value: tenantCode
      }];
      const api = new GenericApi(environment.apiUrls.directory, 'users', this.http, headers);

      api.get('my').subscribe(data => {
        const user = this._setUser(new User(data));
        const role = this._extractRole(user);
        this._setRole(role);
      });
    }
  }

  currentRole(): Role {
    if (this._role) {
      return this._role;
    }

    const user = this.currentUser();

    if (!user) {
      return null;
    }

    const role = this._extractRole(user);
    return this._setRole(role);
  }

  currentUser(): User {
    if (this._user) {
      return this._user;
    }

    const savedUser = localStorage.getItem('user');

    let user: User = null;

    if (savedUser) {
      user = this._setUser(new User(JSON.parse(savedUser)));
    }

    return user;
  }


  currentTenant(): Tenant {
    if (this._tenant) {
      return this._tenant;
    }

    const tenantCode = environment.tenant ? environment.tenant.code : localStorage.getItem('tenant-code');

    let tenant: Tenant = null;

    if (tenantCode) {
      tenant = this._setTenant(new Tenant(environment.tenants[tenantCode]));
    }

    return tenant;
  }

  addRole(role: Role) {
    const user = this.currentUser();
    if (!user) { return null; }
    let newRole = user.roles.find(item => item.key === role.key);
    if (!newRole) {
      user.roles.push(role);
      newRole = role;
      localStorage.setItem('user', JSON.stringify(user));
    }
    return newRole;
  }
  getRole() {
    const role_key = localStorage.getItem('role-key');
    return role_key;
  }

  setRole(role?: Role) {
    const user = this.currentUser();
    if (!user) { return; }

    if (!role) {
      role = this._defaultRole(user);
    }

    const newRole = user.roles.find(item => item.key === role.key);
    if (newRole) {
      this._setRole(newRole);
    }

    return newRole;
  }

  setRoleKey(roleKey: string): Observable<Role> {
    const api = new GenericApi(environment.apiUrls.directory, 'users', this.http, [{
      key: 'x-role-key',
      value: roleKey
    }]);
    return api.get('my').map(data => {
      const user = this._setUser(new User(data));
      const newRole = user.roles.find(item => item.key === roleKey);
      if (newRole) {
        this._setRole(newRole);
      }
      return newRole;
    });
  }

  setTenantCode(tenantCode: string): Tenant {
    return this._setTenant(new Tenant(environment.tenants[tenantCode]));
  }

  join(organization: Organization, employee: Employee): Observable<Role> {
    if (environment.organization) {
      organization = new Organization(environment.organization);
    }

    const role = new Role();
    role.organization = organization;
    role.employee = employee;

    return this._rolesApi.create(role).map(newRole => {
      this.currentUser().roles.push(newRole);
      return newRole;
    });


  }

  enroll(organization: Organization, student: Student): Observable<Role> {
    if (environment.organization) {
      organization = new Organization(environment.organization);
    }

    if (environment.organization) {
      organization = environment.organization;
    }

    const role = new Role();
    role.organization = organization;
    role.student = student;

    return this._rolesApi.create(role).map(newRole => {
      this.currentUser().roles.push(newRole);
      return newRole;
    });
  }

  createSession(): Observable<Session> {
    const session = new Session();
    session.app = 'browser';
    return this._sessionsApi.create(session);
  }

  getSession(id: string): Observable<Session> {
    return this._sessionsApi.get(id).map((data: Session) => {
      if (data.user) {
        const user = this._setUser(data.user);
        const role = this._extractRole(user);
        this._setRole(role);
      }
      return data;
    });
  }

  logout() {
    localStorage.clear();
    this._roleSubject.next(null);
    this._userSubject.next(null);
    window.location.href = this.currentTenant().homeUrl;
    this.uxService.setFullScreen();
  }
}

