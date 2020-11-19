import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomBarComponent } from './features/global/bottom-bar/bottom-bar.component';
import { TopNavBarComponent } from './features/global/top-nav-bar/top-nav-bar.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DailyMealsComponent } from './features/daily-meals/daily-meals.component';
import { DailyTravelComponent } from './features/daily-travel/daily-travel.component';
import { DailyRecyclingComponent } from './features/daily-recycling/daily-recycling.component';
import { DailyElecComponent } from './features/daily-elec/daily-elec.component';

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
    HomePageComponent,
    DailyMealsComponent,
    DailyTravelComponent,
    DailyRecyclingComponent,
    DailyElecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth 
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
