import { Component, OnInit } from "@angular/core";
import { ArrestdataService } from "../services/arrestdata.service";
import { HttpClient } from "@angular/common/http";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-arrestrecords",
  templateUrl: "./arrestrecords.page.html",
  styleUrls: ["./arrestrecords.page.scss"]
})
export class ArrestrecordsPage implements OnInit {
  constructor(
    private arrestdataservice: ArrestdataService,
    private http: HttpClient,
    private nav: NavController
  ) {}
  records;
  notDataLoaded = true;
  imageset = [
    /* //andhra 
      //Arunachal
      //Assam
      //Bihar
      //Chhattisgarh
      //Goa
      //Gujarat
      //Haryana
      //Himachal 
      //Jammu & Kashmir */
    "https://cdn1.newsstate.com/images/andhra-pradesh-boardandhraboardlogo-69_5.jpg",
    "https://i.pinimg.com/474x/93/29/3b/93293b489e5a8fde2ead6ea09439da8a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/61/Assam_State_Emblem.png",
    "https://qph.fs.quoracdn.net/main-qimg-fa115c9727f5b77889383b719f21a173",
    "https://cdn.s3waas.gov.in/s36a10bbd480e4c5573d8f3af73ae0454b/uploads/2018/03/20180326100.gif",
    "https://www.hubert-herald.nl/BhaGoa_bestanden/image008.jpg",
    "https://www.studyandscore.com/images_all/1_Study%20material/General%20knowledge/State%20emblem/Gujarat-state-emblem.jpg",
    "http://www.hubert-herald.nl/BhaHaryana_bestanden/image008.jpg",
    "https://cdn.meramaal.com/wp-content/uploads/2018/06/himachala-Logo.jpg",
    "http://www.jakfinance.nic.in/media/images/Srologo.png"
  ];
  ngOnInit() {
    const api =
      "https://api.data.gov.in/resource/47081e07-a66d-44a0-b568-e8def0b59d48?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10";
    this.http.get(api).subscribe(data => {
      this.records = data;
      this.notDataLoaded = false;
    });
  }
  SaveData(
    stateName,
    peopleArrestedMale,
    peopleArrestedFemale,
    peopleArrestedTotal,
    peopleChargedMale,
    peopleChargedFemale,
    peopleChargedTotal,
    peopleDischargedMale,
    peopleDischargedFemale,
    peopleDischargedTotal
  ) {
    this.arrestdataservice.saveData(
      stateName,
      peopleArrestedMale,
      peopleArrestedFemale,
      peopleArrestedTotal,
      peopleChargedMale,
      peopleChargedFemale,
      peopleChargedTotal,
      peopleDischargedMale,
      peopleDischargedFemale,
      peopleDischargedTotal
    );
    this.nav.navigateForward("/arrestrecord-details");
  }
}
