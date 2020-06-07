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
import { AppComponent } from "../app.component";
import { AuthenticationService } from "../REST/authentication.service";

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
  profileNameEdit: boolean = false;
  profileButton: string = "Wijzig";
  buttontext: string = "Wijzig";
  constructor(
    private http: HttpClient,
    private cdRef: ChangeDetectorRef,
    private base: AuthenticationService
  ) {
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
  toggleProfileNameEdit(): void {
    if (this.profileNameEdit) {
      this.profileButton = "Wijzig";
      this.http
        .post(
          AppConfig.ApiBaseURL + AppConfig.ApiUrls.EDITPROFILENAME,
          this.profileModel
        )
        .subscribe(() => {
          this.init();
        });
    } else {
      this.profileButton = "Opslaan";
    }
    this.profileNameEdit = !this.profileNameEdit;
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
  deleteUser(): void {
    if (confirm("Weet je zeker dat je de gebruiker wilt verwijderen?")) {
      this.http
        .delete(AppConfig.ApiBaseURL + AppConfig.ApiUrls.DELETEUSER)
        .subscribe(
          (res) => {
            this.base.logOut();
          },
          (err) => {}
        );
    }
  }
}
