import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../app.config";
import { MyProfile } from "../models/myprofile.model";
import { UserDetails } from "../models/userdetails.model";

@Component({
  selector: "app-myprofile",
  templateUrl: "./myprofile.component.html",
  styleUrls: ["./myprofile.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class MyprofileComponent implements OnInit {
  profileModel: MyProfile;
  userModel: UserDetails;
  constructor(private http: HttpClient) {
    http
      .get(AppConfig.ApiBaseURL + AppConfig.ApiUrls.GETPROFILE)
      .subscribe((profile: MyProfile) => {
        if (profile) {
          this.profileModel = profile;
        }
      });
    http
      .get(AppConfig.ApiBaseURL + AppConfig.ApiUrls.GETUSERDETAILS)
      .subscribe((details: UserDetails) => {
        if (details) this.userModel = details;
      });
  }

  ngOnInit(): void {}
}
