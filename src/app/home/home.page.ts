import { Component, OnInit } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  // from the native api
  lat: Number;
  lon: Number;
  weatherData;
  // from the open weather map api
  temps: Number;
city ;

  constructor(private geolocation: Geolocation, private http: HttpClient) {}
  ngOnInit() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.lat = resp.coords.latitude;
        this.lon = resp.coords.longitude;
        var apiurl =
          "https://api.openweathermap.org/data/2.5/weather?lat=" +
          resp.coords.latitude +
          "&lon=" +
          resp.coords.longitude +
          "&APPID=b24f130c5bb9bea26174495e6e07f9ee";
        this.http.get(apiurl).subscribe(owmdata => {
          this.weatherData = owmdata;
          // @ts-ignore
          this.city = owmdata.name
          // @ts-ignore
          this.temps = owmdata.main.temp - 273;
          // @ts-ignore
          console.log(owmdata.main.temp - 273);
        });
        // resp.coords.longitude
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }
}
