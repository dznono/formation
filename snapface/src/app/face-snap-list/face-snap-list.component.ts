
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  constructor(
    private faceSnapService : FaceSnapService,
  ){}

  faceSnaps$! : Observable<FaceSnap[]>;

  ngOnInit() {
    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();
  }

}
