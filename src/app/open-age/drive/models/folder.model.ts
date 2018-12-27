import { ModelBase } from '../../core/models/model-base.model';
import { Doc } from './doc.model';


export class Folder extends ModelBase {
  name: string;
  type: string;
  url: string;
  thumbnail: string;
  folders: Folder[];
  files: Doc[];

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
