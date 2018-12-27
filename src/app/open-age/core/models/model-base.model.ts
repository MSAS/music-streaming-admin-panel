export class ModelBase {
    id: string;
    code: string;
    status: string;
    timeStamp: Date;
    isSelected = false;
    isProcessing = false;
    isDeleted = false;

  constructor(obj?: any) {
    if (!obj) { return; }

    this.id = obj.id;
    this.code = obj.code;
    this.status = obj.status;
    this.timeStamp = obj.timeStamp;
  }
}
