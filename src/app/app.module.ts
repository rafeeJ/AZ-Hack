import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BottomBarComponent } from './features/global/bottom-bar/bottom-bar.component';
import { TopNavBarComponent } from './features/global/top-nav-bar/top-nav-bar.component';
import { HomePageComponent } from './features/home-page/home-page.component';

const firebaseConfig = {
  apiKey: "AIzaSyBVXDwII_o-I2NeluOEP3GOuRlL2xaIeZ8",
  authDomain: "az-hack.firebaseapp.com",
  databaseURL: "https://az-hack.firebaseio.com",
  projectId: "az-hack",
  storageBucket: "az-hack.appspot.com",
  messagingSenderId: "521646212220",
  appId: "1:521646212220:web:86aaf5a5e949d3cea135f9"
};

@NgModule({
  declarations: [
    AppComponent,
    BottomBarComponent,
    TopNavBarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, NgbModule, // auth
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
