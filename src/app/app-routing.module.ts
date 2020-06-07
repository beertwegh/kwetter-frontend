import { NgModule, Injectable } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { MyprofileComponent } from "./myprofile/myprofile.component";
import { Authentication } from "./app-routing-guards";
import { AppComponent } from "./app.component";
import { TimelineComponent } from './timeline/timeline.component';
const routes: Routes = [
  { path: "", redirectTo: "myprofile", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "myprofile",
    component: MyprofileComponent,
    canActivate: [Authentication],
  },  {
    path: "timeline",
    component: TimelineComponent,
    canActivate: [Authentication],
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
