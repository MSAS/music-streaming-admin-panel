import { Injectable } from '@angular/core';
import { DirectoryApi } from './directory.api';
import { Department } from '../models/department.model';
import { Http } from '@angular/http';
import { RoleService } from './role.service';

@Injectable()
export class DepartmentService extends DirectoryApi<Department> {
  constructor(
    http: Http,
    roleService: RoleService) {
    super('departments', http, roleService);
  }
}
