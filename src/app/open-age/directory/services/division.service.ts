import { Injectable } from '@angular/core';
import { Division } from '../models/division.model';
import { DirectoryApi } from './directory.api';
import { Http } from '@angular/http';
import { RoleService } from './role.service';

@Injectable()
export class DivisionService extends DirectoryApi<Division> {
  constructor(
    http: Http,
    roleService: RoleService) {
    super('divisions', http, roleService);
  }
}
