import { Service } from './service.model';
import { ModelBase } from '../../core/models/model-base.model';

export class Organization extends ModelBase {
  name: string;
  type: string;
  logo: string;
  joinUrl: string;
  services?: Service[];

  constructor(obj?: any) {
    super();

    if (!obj) {
      return;
    }

    this.id = obj.id;
    this.code = obj.code;
    this.logo = obj.logo;
    this.name = obj.name;
    this.joinUrl = obj.joinUrl;
    this.status = obj.status;
    this.timeStamp = obj.timeStamp;
    this.services = [];

    if (obj.services) {
      obj.services.forEach(item => {
        this.services.push(new Service(item));
      });
    }
  }
}
