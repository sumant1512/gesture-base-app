import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FaceService {
  constructor(private http: HttpClient) {}

  fetchImage(): Observable<any> {
    return this.http.post("http://localhost:3000/search", {
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/05/16/906254-hrithik-roshan.jpg",
    });
  }
}
