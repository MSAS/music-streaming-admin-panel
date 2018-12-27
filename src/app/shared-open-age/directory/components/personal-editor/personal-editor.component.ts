import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Action } from '@open-age/ng-structures';
import { Employee, Address, Profile } from '../../../../open-age/directory/models';
import { ValidationService, UxService } from '../../../../core/services';
import { EmployeeService } from '../../../../open-age/directory/services';

@Component({
  selector: 'directory-personal-editor',
  templateUrl: './personal-editor.component.html',
  styleUrls: ['./personal-editor.component.css']
})
export class PersonalEditorComponent implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  saved: EventEmitter<Employee> = new EventEmitter();

  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validationService: ValidationService,
    private uxService: UxService,
    private employeeService: EmployeeService
  ) { // <--- inject FormBuilder
    this.createForm();
  }

  resetForm() {
    this.employeeForm.reset();
    this.employeeForm.patchValue(this.employee);
  }

  saveForm() {

    this.employee.profile = this.employee.profile || new Profile();
    this.employee.profile.gender = this.employeeForm.value.profile.gender;
    this.employee.profile.dob = this.employeeForm.value.profile.dob;
    this.employee.profile.fatherName = this.employeeForm.value.profile.fatherName;
    this.employee.profile.bloodGroup = this.employeeForm.value.profile.bloodGroup;

    this.employee.address = this.employee.address || new Address();

    this.employee.address.line1 = this.employeeForm.value.address.line1;
    this.employee.address.line2 = this.employeeForm.value.address.line2;
    this.employee.address.district = this.employeeForm.value.address.district;
    this.employee.address.city = this.employeeForm.value.address.city;
    this.employee.address.state = this.employeeForm.value.address.state;
    this.employee.address.pinCode = this.employeeForm.value.address.pinCode;
    this.employee.address.country = this.employeeForm.value.address.country;


    if (this.employee.id) {
      this.employeeService.update(this.employee.id, this.employee).subscribe(updatedEmployee => {
        this.employee = updatedEmployee;
        this.saved.next(this.employee);
      });
    } else {
      this.employeeService.create(this.employee).subscribe(updatedEmployee => {
        this.employee = updatedEmployee;
        this.saved.next(this.employee);
      });
    }
  }

  createForm() {
    this.employeeForm = this.fb.group({
      profile: this.fb.group({
        gender: [''],
        dob: [],
        fatherName: [''],
        bloodGroup: [''],
      }),
      address: this.fb.group({
        line1: ['', Validators.required],
        line2: [''],
        district: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        pinCode: ['', Validators.required],
        country: ['', Validators.required],
      }),
    });
  }

  ngOnInit() {
    this.employeeForm.patchValue(this.employee);
  }
}
