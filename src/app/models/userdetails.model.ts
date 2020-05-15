export class UserDetails {
    Location: string;
    Web: string;
    Bio: string;
    constructor(obj: UserDetailsData = {} as UserDetails) {
      const { 
          Location = "",
          Web = "",
          Bio = ""
      } = obj;
  this.Location = Location;
  this.Web = Web;
  this.Bio = Bio;
    }
  }
  
  export interface UserDetailsData {
    Location: string;
    Web: string;
    Bio: string;
  }
  