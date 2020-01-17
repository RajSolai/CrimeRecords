import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.page.html",
  styleUrls: ["./stats.page.scss"]
})
export class StatsPage implements OnInit {
  //@ts-ignore
  @ViewChild("GUCanvas") barCanvas0: ElementRef;
  //@ts-ignore
  @ViewChild("BENCanvas") barCanvas1: ElementRef;
  //@ts-ignore
  @ViewChild("CHCanvas") barCanvas2: ElementRef;
  //@ts-ignore
  @ViewChild("COICanvas") barCanvas3: ElementRef;
  //@ts-ignore
  @ViewChild("DELCanvas") barCanvas4: ElementRef;

  private barChart0: Chart;
  private barChart1: Chart;
  private barChart2: Chart;
  private barChart3: Chart;
  private barChart4: Chart;

  // data of different cities

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // get data
    this.http.get("").subscribe(data => {});
    // display chart for GUJARAT
    this.barChart0 = new Chart(this.barCanvas0.nativeElement, {
      type: "doughnut",
      data: {
        labels: [
          "Below 18 Years",
          "18 years above & below 30 years",
          "30 years above & below 45 years",
          "45 years above & below 60 years",
          "Above 60 years"
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [7, 7855, 9114, 3768, 440],
            backgroundColor: [
              "#333366",
              "#52de97",
              "#0f4c75",
              "#ff6f5e",
              "#f0134d"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF6384",
              "#36A2EB"
            ]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    // for banglore
    this.barChart1 = new Chart(this.barCanvas1.nativeElement, {
      type: "doughnut",
      data: {
        labels: [
          "Below 18 Years",
          "18 years above & below 30 years",
          "30 years above & below 45 years",
          "45 years above & below 60 years",
          "Above 60 years"
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [5, 2244, 2436, 867, 236],
            backgroundColor: [
              "#333366",
              "#52de97",
              "#0f4c75",
              "#ff6f5e",
              "#f0134d"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF6384",
              "#36A2EB"
            ]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    // for chennai
    this.barChart2 = new Chart(this.barCanvas2.nativeElement, {
      type: "doughnut",
      data: {
        labels: [
          "Below 18 Years",
          "18 years above & below 30 years",
          "30 years above & below 45 years",
          "45 years above & below 60 years",
          "Above 60 years"
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [45, 48898, 35438, 10218, 44],
            backgroundColor: [
              "#333366",
              "#52de97",
              "#0f4c75",
              "#ff6f5e",
              "#f0134d"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF6384",
              "#36A2EB"
            ]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    // for coimbatore
    this.barChart3 = new Chart(this.barCanvas3.nativeElement, {
      type: "doughnut",
      data: {
        labels: [
          "Below 18 Years",
          "18 years above & below 30 years",
          "30 years above & below 45 years",
          "45 years above & below 60 years",
          "Above 60 years"
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [2, 4595, 3127, 812, 8],
            backgroundColor: [
              "#333366",
              "#52de97",
              "#0f4c75",
              "#ff6f5e",
              "#f0134d"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF6384",
              "#36A2EB"
            ]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    // for delhi
    this.barChart4 = new Chart(this.barCanvas4.nativeElement, {
      type: "doughnut",
      data: {
        labels: [
          "Below 18 Years",
          "18 years above & below 30 years",
          "30 years above & below 45 years",
          "45 years above & below 60 years",
          "Above 60 years"
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [55, 4940, 4046, 1392, 45],
            backgroundColor: [
              "#333366",
              "#52de97",
              "#0f4c75",
              "#ff6f5e",
              "#f0134d"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF6384",
              "#36A2EB"
            ]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}
