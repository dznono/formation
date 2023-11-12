import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    HeaderComponent,
    FaceSnapListComponent,
    LandingPageComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
