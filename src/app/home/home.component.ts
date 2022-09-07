import { Component, OnInit } from "@angular/core";
import { FaceService } from "../face.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private faceService: FaceService) {}

  ngOnInit(): void {}

  searchImages() {
    this.faceService.fetchImage().subscribe((res) => {
      console.log(res);
    });
  }
}
