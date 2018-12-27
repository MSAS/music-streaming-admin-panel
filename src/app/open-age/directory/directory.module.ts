import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoleService } from './services';
import { EmployeeService } from './services/employee.service';
import { DepartmentService } from './services/department.service';
import { DesignationService } from './services/designation.service';
import { DivisionService } from './services/division.service';
import { OrganizationService } from './services/organization.service';
import { SectionService } from './services/section.service';
import { StudentService } from './services/student.service';

const angularModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

const thirdPartyModules = [
];

const services = [
  EmployeeService,
  DepartmentService,
  DesignationService,
  DivisionService,
  OrganizationService,
  SectionService,
  StudentService
];
const guards = [];
const sharedComponents = [];
const pipes = [];

@NgModule({
  imports: [
    ...angularModules,
    ...thirdPartyModules,
  ],

  exports: [
    ...angularModules,
    ...thirdPartyModules,
    ...sharedComponents,
    ...pipes
  ],
  declarations: [
    ...sharedComponents,
    ...pipes
  ],
  providers: [
    ...services,
    ...guards
  ]
})
export class DirectoryModule { }
