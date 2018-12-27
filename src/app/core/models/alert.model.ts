import { Observable } from 'rxjs/Observable';
import { Series } from './series.model';

export class Alert {
  code: string;
  text: string;
  icon: string;
  value: string;
  unit: string;
  click: () => Observable<Series>;

  constructor(obj?: any) {
    if (!obj) { return; }

    this.code = obj.code;
    this.text = obj.text;
    this.icon = obj.icon;
    this.value = obj.value;
    this.unit = obj.unit;
    this.click = obj.click;
  }
}
