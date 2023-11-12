import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapService } from '../services/face-snap.service';
import { FaceSnap } from '../models/face-snap.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  textSnap!: string;
  faceSnap!: FaceSnap;

constructor(
  private faceSnapService: FaceSnapService,
  private activeRoute : ActivatedRoute,
){}

  ngOnInit() {
    this.textSnap = "vas y snap !"
    const id = +this.activeRoute.snapshot.params["id"];
    this.faceSnap = this.faceSnapService.getFaceSnapById(id);
  }

  onSnap(){
    if (this.textSnap== "vas y snap !") {
      this.textSnap = "dé snap";
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "snap");
    } else {
      this.textSnap = "vas y snap !";
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id,"unSnap");
    }
  }
}
