import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  textSnap!:string;

constructor(
  private faceSnapService: FaceSnapService,
){}

  ngOnInit() {
    this.textSnap = "vas y snap !"
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
