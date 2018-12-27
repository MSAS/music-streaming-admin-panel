import { Injectable } from '@angular/core';
import { Employee } from '../models';
import { DirectoryApi } from './directory.api';
import { Http } from '@angular/http';
import { RoleService } from './role.service';

@Injectable()
export class EmployeeService extends DirectoryApi<Employee> {

  states: { name: string, value: string }[] = [
    { name: 'In Complete', value: 'inComplete' },
    { name: 'Approval Pending', value: 'new' },
    { name: 'Active', value: 'active' },
    { name: 'In Active', value: 'in-active' },
    { name: 'Archived', value: 'archived' }
  ];

  constructor(
    http: Http,
    roleService: RoleService) {
    super('employees', http, roleService);
  }

}

