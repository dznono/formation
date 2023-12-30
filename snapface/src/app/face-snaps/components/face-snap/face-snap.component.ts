
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snap.service';
import { Router } from '@angular/router';

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
  private router : Router,
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

  onViewFaceSnap() {
    this.router.navigate(["facesnaps/" + this.faceSnap.id]);
}

}
