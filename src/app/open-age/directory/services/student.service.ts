import { Injectable } from '@angular/core';
import { DirectoryApi } from './directory.api';
import { Student } from '../models';
import { Http } from '@angular/http';
import { RoleService } from './role.service';

@Injectable()
export class StudentService extends DirectoryApi<Student> {
  constructor(
    http: Http,
    roleService: RoleService) {
    super('students', http, roleService);
  }
}

