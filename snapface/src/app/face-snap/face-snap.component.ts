import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  textSnap!:string;

  ngOnInit() {
    this.textSnap = "vas y snap !"
  }

  onSnap(){
    if (this.textSnap== "vas y snap !") {
      this.textSnap = "dé snap";
      this.faceSnap.snaps++;
    } else {
      this.textSnap = "vas y snap !";
      this.faceSnap.snaps--;
    }
  }

}
