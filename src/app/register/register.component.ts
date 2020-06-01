import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../REST/authentication.service";
import { Router } from "@angular/router";
import { RegistrationUser } from "../models/registrationuser.model";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  passwordConfirm: string;
  location: string;
  web: string;
  bio: string;
  username: string;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  register(): void {
    var user = new RegistrationUser();
    user.Web = this.web;
    user.Bio = this.bio;
    user.Password = this.password;
    user.Email = this.email;
    user.UserName = this.username;
    if (this.password === this.passwordConfirm) {
      this.authenticationService.postRegister(user).subscribe(
        (result) => {
          this.router.navigateByUrl("/login");
        },
        (err) => {
          alert(err);
        }
      );
    } else {
      alert("Make sure passwords match.");
    }
  }
}
