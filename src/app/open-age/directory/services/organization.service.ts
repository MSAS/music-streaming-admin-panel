import { Injectable } from '@angular/core';
import { DirectoryApi } from './directory.api';
import { Organization } from '../models';
import { Http } from '@angular/http';
import { RoleService } from './role.service';

@Injectable()
export class OrganizationService extends DirectoryApi<Organization> {
  constructor(
    http: Http,
    roleService: RoleService) {
    super('organizations', http, roleService);
  }
}
