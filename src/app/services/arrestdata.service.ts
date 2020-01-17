import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ArrestdataService {
  constructor() {}
  stateName;
  peopleArrestedMale;
  peopleArrestedFemale;
  peopleArrestedTotal;
  peopleChargedMale;
  peopleChargedFemale;
  peopleChargedTotal;
  peopleDischargedMale;
  peopleDischargedFemale;
  peopleDischargedTotal;
  saveData(
    Statename,
    peoplearrestedmale,
    peoplearrestedfemale,
    peoplearrestedtotal,
    peoplechargedmale,
    peoplechargedfemale,
    peoplechargedtotal,
    peopledischargedmale,
    peopledischargedfemale,
    peopledischargedtotal
  ) {
    this.stateName = Statename;
    this.peopleArrestedMale = peoplearrestedmale;
    this.peopleArrestedFemale = peoplearrestedfemale;
    this.peopleArrestedTotal = peoplearrestedtotal;
    this.peopleChargedMale = peoplechargedmale;
    this.peopleChargedFemale = peoplechargedfemale;
    this.peopleChargedTotal = peoplechargedtotal;
    this.peopleDischargedMale = peopledischargedmale;
    this.peopleDischargedFemale = peopledischargedfemale;
    this.peopleDischargedTotal = peopledischargedtotal;
  }
}
