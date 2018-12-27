import { Injectable } from '@angular/core';
import { GenericApi } from '@open-age/ng-api';
import { DirectoryApi } from './directory.api';
import { Designation } from '../models/designation.model';
import { Http } from '@angular/http';
import { RoleService } from './role.service';

@Injectable()
export class DesignationService extends DirectoryApi<Designation> {
  constructor(
    http: Http,
    roleService: RoleService) {
    super('designations', http, roleService);
  }
}
