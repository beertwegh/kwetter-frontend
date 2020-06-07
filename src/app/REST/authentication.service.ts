import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, of, BehaviorSubject, from, Subscription } from "rxjs";
import { AppConfig } from "../app.config";
import { CookieService } from "ngx-cookie-service";
import { RegistrationUser } from "../models/registrationuser.model";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private http: HttpClient, private cookieService: CookieService, private router : Router) {
    var token = this.cookieService.get("authorization-key");
    this.isLoggedIn.next(!!token);
  }

  /** GET login codes from the server */
  getLogin(clientnr: string, password: string) {
    const URL = `${AppConfig.ApiBaseURL}${AppConfig.ApiUrls.LOGIN}`;
    this.http
      .post(URL, { username: clientnr, password }, { responseType: "text" })
      .subscribe(
        (response: string) => {
          var token = (response as unknown) as string;
          if (token) {
            //localStorage.setItem(AppConfig.LocalStorageKeys.TOKEN, token);
            this.cookieService.set("authorization-key", token);
            this.router.navigateByUrl("/myprofile");
          }
          this.isLoggedIn.next(!!token);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  //* Check if logged in */
  public loggedIn(): BehaviorSubject<boolean> {
    return this.isLoggedIn;
  }

  //* Get authorization token */
  public getAuthorizationToken(): string {
    //return localStorage.getItem(AppConfig.LocalStorageKeys.TOKEN);
    return this.cookieService.get("authorization-key");
  }

  //* Logout */
  public logOut(): void {
    this.cookieService.deleteAll();
    this.isLoggedIn.next(false);
  }

  /** POST: add a new user to the server */
  postRegister(user: RegistrationUser) {
    const serverURL = AppConfig.ApiBaseURL + AppConfig.ApiUrls.REGISTER;
    return this.http
      .post<RegistrationUser>(serverURL, user);
    
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // Let the user know how to register properly
      console.log(error);
      alert(error.error.text);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
