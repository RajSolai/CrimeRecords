import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NavController } from "@ionic/angular";
import { CybercrimedataService } from "../services/cybercrimedata.service";

@Component({
  selector: "app-cybercrimes",
  templateUrl: "./cybercrimes.page.html",
  styleUrls: ["./cybercrimes.page.scss"]
})
export class CybercrimesPage implements OnInit {
  constructor(
    private http: HttpClient,
    private nav: NavController,
    private cybercrimedataservice : CybercrimedataService
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
      "https://api.data.gov.in/resource/81e1ed36-f67e-4c48-b1ae-fad90bf37bce?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=39";
    this.http.get(api).subscribe(data => {
      this.records = data;
      this.notDataLoaded = false;
    });
  }
SaveData( stateName,
  crackerHacker,
  cyberTerrorist,
  proHacker,
  Students,
  Others){
  this.cybercrimedataservice.saveData( stateName,
    crackerHacker,
    cyberTerrorist,
    proHacker,
    Students,
    Others)
    this.nav.navigateForward("/cybercrimedetail")
    
}
}
