import { Component, OnInit } from "@angular/core";
import { CybercrimedataService } from "../services/cybercrimedata.service";

@Component({
  selector: "app-cybercrimedetail",
  templateUrl: "./cybercrimedetail.page.html",
  styleUrls: ["./cybercrimedetail.page.scss"]
})
export class CybercrimedetailPage implements OnInit {
  constructor(private cybercrimedataservice: CybercrimedataService) {}

  stateName;
  crackerHacker;
  cyberTerrorist;
  proHacker;
  Students;
  Others;
  ngOnInit() {
    this.stateName = this.cybercrimedataservice.state_name;
    this.crackerHacker = this.cybercrimedataservice.cracker_hacker;
    this.cyberTerrorist = this.cybercrimedataservice.cyber_terrorist;
    this.proHacker = this.cybercrimedataservice.pro_hacker;
    this.Students = this.cybercrimedataservice.students;
    this.Others = this.cybercrimedataservice.others;
  }
}
