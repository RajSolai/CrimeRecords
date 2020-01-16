import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { getLocaleDateFormat } from "@angular/common";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiserviceService {
  tempdata;
  //api token
  apiurl =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=b0404985f10f4304bfea8b247262c9b4";
  constructor(private http: HttpClient) {}
  //fetching data for search
  getDataSearch = () => {
    return this.http.get("");
  };
  //fetching common data
  getDataCommon = () => {
    return this.http.get(this.apiurl).subscribe(
      data => {
        return data;
      },
      error => {
        console.log(error);
        alert("Please Check your internet connection");
      }
    );
  };
}
