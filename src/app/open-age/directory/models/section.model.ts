import { ModelBase } from '../../core/models/model-base.model';

export class Section extends ModelBase {
  name: string;
  course: string;
  batch: string;
  institute: string;

  constructor(obj?: any) {
    super();

    if (!obj) {
      return;
    }

    this.id = obj.id;
    this.code = obj.code;
    this.name = obj.name;
    this.course = obj.course;
    this.batch = obj.batch;
    this.institute = obj.institute;
  }
}
