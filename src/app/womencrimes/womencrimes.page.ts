import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../services/data-service.service";

@Component({
  selector: "app-womencrimes",
  templateUrl: "./womencrimes.page.html",
  styleUrls: ["./womencrimes.page.scss"]
})
export class WomencrimesPage implements OnInit {
  constructor(private dataservice: DataServiceService) {}
  statename;
  casepending;
  casereported;
  casetotal;
  truebutNoevidence;
  falsereports;
  falsereportmistake;
  casedisposedpolice;
  ngOnInit() {
    this.statename = this.dataservice.stateName;
    this.casepending = this.dataservice.casePending;
    this.casereported = this.dataservice.caseReported;
    this.casetotal = this.dataservice.caseTotal;
    this.truebutNoevidence = this.dataservice.trueButNoEvidence;
    this.falsereports = this.dataservice.falseReports;
    this.falsereportmistake = this.dataservice.falseReportMistake;
    this.casedisposedpolice = this.dataservice.caseDisposedPolice;
  }
}
