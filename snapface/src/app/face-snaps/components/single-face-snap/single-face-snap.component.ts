import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapService } from '../../../core/services/face-snap.service';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  textSnap!: string;
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;

constructor(
  private faceSnapService: FaceSnapService,
  private activeRoute : ActivatedRoute,
){}

  ngOnInit() {
    this.textSnap = "vas y snap !"
    const id = +this.activeRoute.snapshot.params["id"];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(id);
  }

  onSnap(id: number){
    if (this.textSnap== "vas y snap !") {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(id, 'snap').pipe(
        tap(() => this.textSnap = "dé snap")
      );
    } else {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(id, 'unSnap').pipe(
        tap(() => this.textSnap = "vas y snap !")
      );
    }
  }
}
