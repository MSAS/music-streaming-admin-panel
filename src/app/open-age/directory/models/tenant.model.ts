
export class Tenant {
  id: string;
  code: string;
  name: string;
  logo: string;
  joinUrl: string;
  homeUrl: string;

  constructor(obj?: any) {

    if (!obj) {
      return;
    }

    this.id = obj.id;
    this.code = obj.code;
    this.logo = obj.logo;
    this.name = obj.name;
    this.joinUrl = obj.joinUrl;
    this.homeUrl = obj.homeUrl;

  }
}
