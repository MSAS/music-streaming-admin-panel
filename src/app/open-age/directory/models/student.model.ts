import { ModelBase } from '../../core/models/model-base.model';
import { Profile } from './profile.model';
import { Section } from './section.model';

export class Student extends ModelBase {
  section: Section;
  profile: Profile;

  constructor(obj?: any) {
    super();

    if (!obj) {
      return;
    }

    this.id = obj.id;
    this.code = obj.code;
    this.section = new Section(obj.section);
    this.status = obj.status;
    this.timeStamp = obj.timeStamp;
    this.profile = new Profile(obj.profile);
  }
}
