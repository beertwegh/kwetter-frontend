export class AppConfig {
  //static ApiBaseURL = "https://localhost:9001/api/";
  static ApiBaseURL = "http://kwetter.basvdeertwegh.nl/api/";
  //static ApiBaseURL = "http://35.233.59.167/api/";

  static ApiUrls = {
    LOGIN: "auth",
    GETPROFILE: "profile/current",
    GETUSERDETAILS: "user/details",
    REGISTER: "User/Register",
    EDITUSER: "User/EditUser",
    NEWTWEET: "message/new",
    GETALLTWEETS: "message/all",
    EDITPROFILENAME: "profile/editname",
    DELETEUSER: "user/delete",
  };
}
