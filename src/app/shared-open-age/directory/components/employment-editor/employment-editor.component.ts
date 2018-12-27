import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Action } from '@open-age/ng-structures';
import { Observable } from 'rxjs/Observable';
import { Employee, Designation, Department, Profile } from '../../../../open-age/directory/models';
import { ValidationService, UxService } from '../../../../core/services';
import { EmployeeService, DesignationService, DepartmentService } from '../../../../open-age/directory/services';


@Component({
  selector: 'directory-employment-editor',
  templateUrl: './employment-editor.component.html',
  styleUrls: ['./employment-editor.component.css']
})
export class EmploymentEditorComponent implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  saved: EventEmitter<Employee> = new EventEmitter();

  employeeForm: FormGroup;

  filteredEmployees: Observable<Employee[]>;
  filteredDesignations: Observable<Designation[]>;
  filteredDepartments: Observable<Department[]>;

  constructor(
    private fb: FormBuilder,
    private validationService: ValidationService,
    private uxService: UxService,
    private employeeService: EmployeeService,
    private designationService: DesignationService,
    private departmentService: DepartmentService,
  ) {
    this.createForm();
  }

  resetForm() {
    this.employeeForm.reset();
    this.employeeForm.patchValue(this.employee);
  }

  saveForm() {
    this.employee.profile = this.employee.profile || new Profile();
    this.employee.profile.firstName = this.employeeForm.value.profile.firstName;
    this.employee.profile.lastName = this.employeeForm.value.profile.lastName;

    this.employee.supervisor = this.employeeForm.value.supervisor;
    this.employee.department = this.employeeForm.value.department;
    this.employee.designation = this.employeeForm.value.designation;
    // this.employee.division = this.employeeForm.value.division;

    this.employee.email = this.employeeForm.value.email;
    this.employee.phone = this.employeeForm.value.phone;
    this.employee.status = this.employeeForm.value.status;
    this.employee.code = this.employeeForm.value.code;

    if (this.employee.id) {
      this.employeeService.update(this.employee.id, this.employee).subscribe(updatedEmployee => {
        this.employee = updatedEmployee;
        this.employeeForm.patchValue(this.employee);
        this.employeeForm.markAsPristine();
        this.saved.next(this.employee);
      });
    } else {
      this.employeeService.create(this.employee).subscribe(updatedEmployee => {
        this.employee = updatedEmployee;
        this.employeeForm.patchValue(this.employee);
        this.employeeForm.markAsPristine();
        this.saved.next(this.employee);
      });
    }
  }

  createForm() {
    this.employeeForm = this.fb.group({
      profile: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['']
      }),
      designation: [''],
      department: [''],
      supervisor: ['', Validators.required],
      email: ['', [Validators.pattern(this.validationService.email), Validators.required]],
      phone: ['', [Validators.required]],
      status: ['', Validators.required],
      code: ['', Validators.required],
    }, { updateOn: 'blur' });
  }

  ngOnInit() {
    this.employeeForm.patchValue(this.employee);
    if (!this.employee.id) {
      this.employeeForm.get('code').clearValidators();
    }

    this.filteredEmployees = this.employeeForm.get('supervisor').valueChanges
      .startWith(null)
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap(text => {
        if (!text || typeof text === 'object') { return []; }
        return this.employeeService.search({ name: text }).map(data => data.items);
      });

    this.filteredDesignations = this.employeeForm.get('designation').valueChanges
      .startWith(null)
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap(text => {
        if (typeof text === 'object') { return []; }
        return this.designationService.search({ name: text }).map(data => {
          return data.items.length ? data.items : [{
            name: text,
            code: (text as string).toLowerCase().replace(' ', '-')
          }];
        });
      });

    this.filteredDepartments = this.employeeForm.get('department').valueChanges
      .startWith(null)
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap(text => {
        if (typeof text === 'object') { return []; }
        return this.departmentService.search({ name: text }).map(data => {
          return data.items.length ? data.items : [{
            name: text,
            code: (text as string).toLowerCase().replace(' ', '-')
          }];
        });
      });
  }

  displayEmployee(employee?: Employee): string | undefined {
    return employee ? `${employee.profile.firstName} ${employee.profile.lastName} (${employee.code})` : undefined;
  }

  displayDesignation(item?: Designation): string | undefined {
    return !item || item.name === 'Default' ? undefined : item.name;
  }

  displayDepartment(item?: Department): string | undefined {
    return !item || item.name === 'Default' ? undefined : item.name;
  }

}
