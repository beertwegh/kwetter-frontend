export class MyProfile {
  profileName: string;
  profilePicture: string;
  constructor(obj: MyProfileData = {} as MyProfile) {
    const { profileName = "", profilePicture = "" } = obj;
    this.profileName = profileName;
    this.profilePicture = profilePicture;
  }
}

export interface MyProfileData {
  profileName: string;
  profilePicture: string;
}
