import { Injectable } from '@angular/core';
import { DriveApiBase } from './drive-api.base';
import { RoleService } from '../../directory/services';
import { Http } from '@angular/http';
import { Folder } from '../models/folder.model';

@Injectable()
export class FolderService extends DriveApiBase<Folder> {

  constructor(http: Http, roleService: RoleService) {
    super('folders', http, roleService)
   }

}
