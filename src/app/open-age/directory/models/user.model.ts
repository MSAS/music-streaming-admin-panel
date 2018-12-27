import { ModelBase } from '../../core/models/model-base.model';
import { Role } from './role.model';

export class User {
  id: string;
  name: string;
  mobile: string;
  email: string;
  roles: Role[];
  status: string;
  timeStamp: Date;

  constructor(obj?: any) {
    if (!obj) {
      return;
    }

    this.id = obj.id;
    this.timeStamp = obj.timeStamp;

    this.name = obj.name;
    this.email = obj.email;
    this.mobile = obj.phone;
    this.roles = [];

    if (obj.roles) {
      obj.roles.forEach(item => {
        this.roles.push(new Role(item));
      });
    }
  }
}
