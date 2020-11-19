import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import firebase from 'firebase/app'

import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user$: Observable<User>

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { 
    
    this.user$ = this.afAuth.authState.pipe(
      switchMap( user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null)
        }
      })
    )
  }

  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }
  
  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const thing: AngularFirestoreDocument = this.afs.doc(`profiles/${user.uid}`);

    const data = { 
      uid: user.uid, 
      email: user.email, 
      displayName: user.displayName, 
      photoURL: user.photoURL
    } 

    let x = {
      "bus_travel_default": 0.0,
      "car_travel_default": 0.0,
      "computer_screetime_default": 0.0,
      "diet_default": "meat",
      "food_disposal_default": 0,
      "glass_disposal_default": 0,
      "mobile_screentime_default": 0,
      "organisations": [],
      "paper_disposal_default": 0,
      "plastic_disposal_default": 0,
      "tin_disposal_default": 0,
      "train_travel_default": 0,
      "tv_screentime_default": 0,
      "uid": user.uid,
      "displayName": user.displayName
  }
    thing.set(x, {merge: true})
    return userRef.set(data, { merge: true })
  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }
}
