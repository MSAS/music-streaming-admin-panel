import { Injectable } from '@angular/core';
import { DirectoryApi } from './directory.api';
import { Section } from '../models';
import { Http } from '@angular/http';
import { RoleService } from './role.service';

@Injectable()
export class SectionService extends DirectoryApi<Section> {
  constructor(
    http: Http,
    roleService: RoleService) {
    super('sections', http, roleService);
  }
}
