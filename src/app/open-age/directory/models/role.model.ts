
import { Organization } from './organization.model';
import { Employee } from './employee.model';
import { Student } from './student.model';

export class Role {
  id: string;
  key: string;
  status: string;
  timeStamp: Date;
  employee?: Employee;
  student?: Student;
  organization?: Organization;
  permissions: string[] = [];

  constructor(obj?: any) {

    if (!obj) {
      return;
    }

    this.id = obj.id;
    this.key = obj.key;
    this.status = obj.status;
    this.timeStamp = obj.timeStamp;

    if (obj.employee) {
      this.employee = new Employee(obj.employee);
    }

    if (obj.student) {
      this.student = new Student(obj.student);
    }

    if (obj.organization) {
      this.organization = new Organization(obj.organization);
    }

    this.permissions = [];
    if (obj.permissions) {
      obj.permissions.forEach(permission => {
        this.permissions.push(permission);
      });
    }
  }
}
