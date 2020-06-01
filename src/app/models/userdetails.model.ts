export class UserDetails {
    location: string;
    web: string;
    bio: string;
    constructor(obj: UserDetailsData = {} as UserDetails) {
      const { 
          location = "",
          web = "",
          bio = ""
      } = obj;
  this.location = location;
  this.web = web;
  this.bio = bio;
    }
  }
  
  export interface UserDetailsData {
    location: string;
    web: string;
    bio: string;
  }
  