import { Injectable } from '@angular/core';
import { DriveApiBase } from './drive-api.base';
import { RoleService } from '../../directory/services/role.service';
import { Http } from '@angular/http';
import { IApi } from '@open-age/ng-api';

@Injectable()
export class FileService extends DriveApiBase<File> {

  constructor(http: Http, roleService: RoleService) {
    super(`123/123/files`, http, roleService);
  }
}