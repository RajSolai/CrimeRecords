import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class CybercrimedataService {
  constructor() {}
  state_name;
  cracker_hacker;
  cyber_terrorist;
  pro_hacker;
  students;
  others;
  saveData(
    stateName,
    crackerHacker,
    cyberTerrorist,
    proHacker,
    Students,
    Others
  ) {
    this.state_name = stateName;
    this.cracker_hacker = crackerHacker;
    this.cyber_terrorist = cyberTerrorist;
    this.pro_hacker = proHacker;
    this.students = Students;
    this.others = Others;
  }
}
