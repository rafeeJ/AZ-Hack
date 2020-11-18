import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomBarComponent } from './features/global/bottom-bar/bottom-bar.component';
import { TopNavBarComponent } from './features/global/top-nav-bar/top-nav-bar.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilePageComponent } from './features/profile-page/profile-page.component';
import { HttpClientModule } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyBVXDwII_o-I2NeluOEP3GOuRlL2xaIeZ8",
  authDomain: "az-hack.firebaseapp.com",
  databaseURL: "https://az-hack.firebaseio.com",
  projectId: "az-hack",
  storageBucket: "az-hack.appspot.com",
  messagingSenderId: "521646212220",
  appId: "1:521646212220:web:86aaf5a5e949d3cea135f9"
};

declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}
@NgModule({
  declarations: [
    AppComponent,
    BottomBarComponent,
    TopNavBarComponent,
    HomePageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth 
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
