import { ModelBase } from '../../core/models/model-base.model';


export class Doc extends ModelBase {
  name: string;
  type: string;
  url: string;
  thumbnail: string;

  constructor(obj?: any) {
    super();

    if (!obj) {
      return;
    }

    this.id = obj.id;
    this.code = obj.code;
    this.name = obj.name;
    this.type = obj.type;
    this.url = obj.url;
  }
}
