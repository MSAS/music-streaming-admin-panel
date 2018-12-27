import { ModelBase } from '../../core/models/model-base.model';
import { Profile } from './profile.model';
import { Designation } from './designation.model';
import { Department } from './department.model';
import { Division } from './division.model';
import { Address } from './address.model';

export class Employee extends ModelBase {
  designation: Designation;
  department: Department;
  division: Division;
  profile: Profile;
  email: string;
  phone: string;
  supervisor: Employee;
  address: Address;


  constructor(obj?: any) {
    super();

    if (!obj) {
      return;
    }

    this.id = obj.id;
    this.code = obj.code;
    this.designation = new Designation(obj.designation);
    this.department = new Department(obj.department);
    this.division = new Division(obj.division);
    this.status = obj.status;
    this.timeStamp = obj.timeStamp;
    this.profile = new Profile(obj.profile);

  }
}
