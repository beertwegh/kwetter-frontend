import { Component } from "@angular/core";
import { AuthenticationService } from "./REST/authentication.service";
import { AppConfig } from "./app.config";
import { Router } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Kwetter";
  loggedIn: boolean = false;
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.subscribeEvents();
  }

  subscribeEvents(): void {    
    this.authService.loggedIn().subscribe(loggedIn => {
      this.loggedIn = loggedIn;

      if (loggedIn) {
        console.log("logged in")
    //    this.router.navigateByUrl("/dashboard");
      } else {
        this.router.navigateByUrl("/login");
      }
    });    
  }
}
