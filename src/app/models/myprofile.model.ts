export class MyProfile {
  ProfileName: string;
  ProfilePicture: string;
  constructor(obj: MyProfileData = {} as MyProfile) {
    const { ProfileName = "", ProfilePicture = "" } = obj;
    this.ProfileName = ProfileName;
    this.ProfilePicture = ProfilePicture;
  }
}

export interface MyProfileData {
  ProfileName: string;
  ProfilePicture: string;
}
