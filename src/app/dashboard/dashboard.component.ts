import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  Renderer2
} from "@angular/core";
import { DashboardDataPoint } from "../models/dashboard-data-point.model";
import { Chart } from "chart.js";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../app.config";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",

  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  // Charts
  chartOptions = {
    responsive: false
  };
  chartData: ChartModel[] = [];
  labels: string[] = [];
  chart: Chart;
  //Filter
  selectedFilter: number = StatusPeriod.THREEMONTHS;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  onChartClick(event) {
    console.log(event);
  }
  changeFilter(period: number) {
    this.selectedFilter = period;
  }
}
class ChartModel {
  label: string;
  data: number[] = [];
  backgroundColor: string;
  constructor(label: string) {
    this.label = label;
  }
}
enum StatusPeriod {
  YEAR,
  THREEMONTHS,
  MONTH,
  WEEK
}
