import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../services/data-service.service";
import { HttpClient } from "@angular/common/http";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
  constructor(
    private dataservice: DataServiceService,
    private http: HttpClient,
    private nav: NavController
  ) {}
  records;
  notDataLoaded=true;
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
    "https://www.hubert-herald.nl/BhaHaryana_bestanden/image008.jpg",
    "https://cdn.meramaal.com/wp-content/uploads/2018/06/himachala-Logo.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Seal_of_Jammu_and_Kashmir_color.png/212px-Seal_of_Jammu_and_Kashmir_color.png"
  ];
  ngOnInit() {
    const api =
      "https://api.data.gov.in/resource/fbea81df-d156-4de5-89a3-512401ff8117?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10";
    this.http.get(api).subscribe(data => {
      this.records = data;
      this.notDataLoaded = false;
    });
  }
  sendData(
    statename,
    casepending,
    casereported,
    casetotal,
    truebutNoevidence,
    falsereports,
    falsereportmistake,
    casedisposedpolice
  ) {
    this.dataservice.saveData(
      statename,
      casepending,
      casereported,
      casetotal,
      truebutNoevidence,
      falsereports,
      falsereportmistake,
      casedisposedpolice
    );
    this.nav.navigateForward("/womencrimes");
  }
}
