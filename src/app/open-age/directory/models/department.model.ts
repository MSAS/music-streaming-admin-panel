import { ModelBase } from '../../core/models/model-base.model';

export class Department extends ModelBase {
  name: string;

  constructor(obj?: any) {
    super();

    if (!obj) {
      return;
    }

    this.id = obj.id;
    this.code = obj.code;
    this.name = obj.name;
  }
}
