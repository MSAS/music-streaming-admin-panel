export class FilterControl {
  key: string;
  value?: any;
  operator: string;
  title: string;
  type: string;
  options: {
    name: string;
    value: string;
  }[];


  constructor(obj?: {
    key: string,
    value?: any,
    operator?: string,
    title: string,
    type: string,
    options?: {
      name: string,
      value: string,
    }[]
  }) {
    if (!obj) { return; }

    this.key = obj.key;
    this.value = obj.value;
    this.operator = obj.operator || 'eq';
    this.title = obj.title;
    this.type = obj.type;
    this.options = obj.options;

  }

}
