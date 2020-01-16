import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataServiceService {
  constructor() {}
  stateName = null;
  casePending = null;
  caseReported = null;
  caseTotal = null;
  trueButNoEvidence = null;
  falseReports = null;
  falseReportMistake = null;
  caseDisposedPolice = null;
  saveData = (
    statename,
    casepending,
    casereported,
    casetotal,
    truebutNoevidence,
    falsereports,
    falsereportmistake,
    casedisposedpolice
  ) => {
    this.stateName = statename;
    this.casePending = casepending;
    this.caseReported = casereported;
    this.caseTotal = casetotal;
    this.trueButNoEvidence = truebutNoevidence;
    this.falseReports = falsereports;
    this.falseReportMistake = falsereportmistake;
    this.caseDisposedPolice = casedisposedpolice;
  };
}
