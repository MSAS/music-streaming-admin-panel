import { Component, OnInit, Input } from '@angular/core';
import { Employee, Student, Role } from '../../../open-age/directory/models';
import { Profile } from '../../../open-age/directory/models/profile.model';
import { RowPlaceholder } from '@angular/cdk/table';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.css']
})
export class ProfileRowComponent implements OnInit {

  @Input()
  role: Role;

  @Input()
  showDetails = false;

  employee: Employee;
  student: Student;
  profile: Profile;

  constructor() { }

  ngOnInit() {
    if (this.role.employee) {
      this.employee = this.role.employee;
    }
    if (this.role.student) {
      this.student = this.role.student;
    }

    if (this.employee) {
      this.profile = this.employee.profile;
    } else if (this.student) {
      this.profile = this.student.profile;
    }
    this.profile = this.profile || new Profile();
    this.profile.pic = this.profile.pic || { url: 'assets/images/no-user-image.png' };
    this.profile.pic.url = this.profile.pic.url || 'assets/images/no-user-image.png';
  }
  ngOnChanges() {
    if (this.role.employee) {
      this.employee = this.role.employee;
    }
    if (this.role.student) {
      this.student = this.role.student;
    }

    if (this.employee) {
      this.profile = this.employee.profile;
    } else if (this.student) {
      this.profile = this.student.profile;
    }
    this.profile = this.profile || new Profile();
    this.profile.pic = this.profile.pic || { url: 'assets/images/no-user-image.png' };
    this.profile.pic.url = this.profile.pic.url || 'assets/images/no-user-image.png';

  }
}
