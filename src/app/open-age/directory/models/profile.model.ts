
export class Profile {
  firstName: string;
  lastName: string;
  pic: {
    url?: string,
    data?: string
  };


  dob: Date;
  fatherName: string;
  bloodGroup: string;
  gender: string;

  constructor(obj?: any) {

    if (!obj) {
      return;
    }
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.pic = {
    };
    if (obj.pic) {
      this.pic.url = obj.pic.url;
      this.pic.data = obj.pic.data;
    }

    this.dob = obj.dob;
    this.fatherName = obj.fatherName;
    this.bloodGroup = obj.bloodGroup;
    this.gender = obj.gender;

  }
}
