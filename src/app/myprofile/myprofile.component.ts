import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectorRef,
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../app.config";
import { MyProfile } from "../models/myprofile.model";
import { UserDetails } from "../models/userdetails.model";
import { ModelFactory } from "../REST/helpers/ModelFactory";

@Component({
  selector: "app-myprofile",
  templateUrl: "./myprofile.component.html",
  styleUrls: ["./myprofile.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class MyprofileComponent implements OnInit {
  profileModel: MyProfile;
  userModel: UserDetails;
  edit: boolean = false;
  buttontext: string = "Wijzig";
  constructor(private http: HttpClient, private cdRef: ChangeDetectorRef) {
    this.init();
  }
  toggleEdit(): void {
    if (this.edit) {
      this.buttontext = "Wijzig";
      this.http
        .post(AppConfig.ApiBaseURL + AppConfig.ApiUrls.EDITUSER, this.userModel)
        .subscribe(() => {
          this.init();
        });
    } else {
      this.buttontext = "Opslaan";
    }
    this.edit = !this.edit;
  }
  init(): void {
    this.http
      .get(AppConfig.ApiBaseURL + AppConfig.ApiUrls.GETPROFILE)
      .subscribe((profile) => {
        if (profile) {
          this.profileModel = ModelFactory.createType<MyProfile>(
            MyProfile,
            profile
          );
        }
        console.log(this.profileModel);
      });
    this.http
      .get(AppConfig.ApiBaseURL + AppConfig.ApiUrls.GETUSERDETAILS)
      .subscribe((details) => {
        if (details)
          this.userModel = ModelFactory.createType<UserDetails>(
            UserDetails,
            details
          );
        console.log(this.userModel);
      });
  }
  ngOnInit(): void {}
}
