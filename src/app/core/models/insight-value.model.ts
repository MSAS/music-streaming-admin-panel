
export class InsightKeyValue {
    key: string;
    label: any[];
    data: any[];
   constructor(obj?: any) {
    if (!obj) { return; }
        this.key = obj.key;
        this.label = obj.label;
        this.data = obj.data;
      }
}
