export class AppConfig {
  static ApiBaseURL = "https://localhost:9001/api/";

  static ApiUrls = {
    LOGIN:"auth",
    GETPROFILE: "profile/profile/current",
    GETUSERDETAILS: "user/user/details"
  };
  static LocalStorageKeys = {
    TOKEN: "token"
  };
}
