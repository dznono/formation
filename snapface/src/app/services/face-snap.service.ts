
import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { Observable, map, switchMap } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn : "root"
})
export class  FaceSnapService {

  constructor(
    private http : HttpClient
  ){}

  faceSnaps : FaceSnap[] = [];

  // faceSnaps : FaceSnap[] = [
  //   {
  //     id: 1,
  //     title: 'Archibald',
  //     description: 'Mon meilleur ami depuis tout petit !',
  //     imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
  //     createdDate: new Date(),
  //     snaps: 0,
  //     location: 'Paris'
  //   },
  //   { id: 2,
  //     title: 'Three Rock Mountain',
  //     description: 'Un endroit magnifique pour les randonnées.',
  //     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
  //     createdDate: new Date(),
  //     snaps: 6,
  //     location: 'la montagne'
  //   },
  //   { id: 3,
  //     title: 'Un bon repas',
  //     description: 'Mmmh que c\'est bon !',
  //     imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
  //     createdDate: new Date(),
  //     snaps: 0
  //   }
  // ];

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  snapFaceSnapById(id: number, snapType: 'snap' | 'unSnap'): Observable<FaceSnap> {
    return this.getFaceSnapById(id).pipe(
        map(faceSnap => ({
            ...faceSnap,
            snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
        })),
        switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
          "http://localhost:3000/facesnaps/"+ id,
            updatedFaceSnap)
        )
    );
}

  getFaceSnapById(id:number): Observable<FaceSnap>{
    return this.http.get<FaceSnap>("http://localhost:3000/facesnaps/"+ id);
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
    return this.getAllFaceSnaps().pipe(
      // ici on fait 3 map pour bien décomposer
         map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
         map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
         map(previousFacesnap => ({
            ...formValue,
            snaps: 0,
            createdDate: new Date(),
            id: previousFacesnap.id + 1
        })),
        switchMap(newFacesnap => this.http.post<FaceSnap>(
            'http://localhost:3000/facesnaps',
            newFacesnap)
        )
    );
  }

}

