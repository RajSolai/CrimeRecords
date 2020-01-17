import { Component, OnInit } from "@angular/core";
import { ArrestdataService } from "../services/arrestdata.service";

@Component({
  selector: "app-arrestrecord-details",
  templateUrl: "./arrestrecord-details.page.html",
  styleUrls: ["./arrestrecord-details.page.scss"]
})
export class ArrestrecordDetailsPage implements OnInit {
  constructor(private arrestdataservice: ArrestdataService) {}
  Statename;
  peoplearrestedmale;
  peoplearrestedfemale;
  peoplearrestedtotal;
  peoplechargedmale;
  peoplechargedfemale;
  peoplechargedtotal;
  peopledischargedmale;
  peopledischargedfemale;
  peopledischargedtotal;
  ngOnInit() {
    this.Statename = this.arrestdataservice.stateName;
    this.peoplearrestedmale = this.arrestdataservice.peopleArrestedMale;
    this.peoplearrestedfemale = this.arrestdataservice.peopleArrestedFemale;
    this.peoplearrestedtotal = this.arrestdataservice.peopleArrestedTotal;
    this.peoplechargedmale = this.arrestdataservice.peopleChargedMale;
    this.peoplechargedfemale = this.arrestdataservice.peopleChargedFemale;
    this.peoplechargedtotal = this.arrestdataservice.peopleChargedTotal;
    this.peopledischargedmale = this.arrestdataservice.peopleDischargedMale;
    this.peopledischargedfemale = this.arrestdataservice.peopleDischargedFemale;
    this.peopledischargedfemale = this.arrestdataservice.peopleDischargedTotal;
  }
}
