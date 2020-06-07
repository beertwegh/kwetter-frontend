export class RegistrationUser {
  Password: string;
  UserName: string;
  ProfileName: string;
  Email: string;
  Location: string;
  Web: string;
  Bio: string;
  constructor(obj: RegistrationUserData = {} as RegistrationUser) {
    const {
      Password = "",
      UserName = "",
      ProfileName = "",
      Email = "",
      Location = "",
      Web = "",
      Bio = "",
    } = obj;
    this.Password = Password;
    this.UserName = UserName;
    this.ProfileName = ProfileName;
    this.Email = Email;
    this.Location = Location;
    this.Web = Web;
    this.Bio = Bio;
  }
}

export interface RegistrationUserData {
  Password: string;
  UserName: string;
  ProfileName: string;
  Email: string;
  Location: string;
  Web: string;
  Bio: string;
}
