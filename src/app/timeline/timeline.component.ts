import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../app.config";
import { ModelFactory } from "../REST/helpers/ModelFactory";
import { Message } from "../models/message.model";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"],
})
export class TimelineComponent {
  newTweet: string;
  tweets: Message[];
  constructor(private http: HttpClient) {
    this.getTweets();
  }
  postTweet(): void {
    this.http
      .post(AppConfig.ApiBaseURL + AppConfig.ApiUrls.NEWTWEET, {
        MessageText: this.newTweet,
      })
      .subscribe(
        (res) => {
          this.newTweet = "";
          this.getTweets();
        },
        (err) => {}
      );
  }
  getTweets(): void {
    this.http
      .get(AppConfig.ApiBaseURL + AppConfig.ApiUrls.GETALLTWEETS)
      .subscribe((data: any) => {
        this.tweets = ModelFactory.createArrayType<Message>(Message, data);
      });
  }
}
