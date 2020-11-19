import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private afs: AngularFirestore) { }

  getUserfromUID(id) {
    return this.http.get(`${environment.apiUrl}/users/${id}`)
  }
  putUserfromUID(id, body) {
    return this.http.put(`${environment.apiUrl}/users/${id}`, body)
  }
  postUserfromUID(body) {
    return this.http.post(`${environment.apiUrl}/users/`, body)
  }
  
  getUserReportfromUID(id, date) {
    return this.http.get(`${environment.apiUrl}/users/${id}/report/${date}`)
  }
  putUserReportfromUID(id, date, body) {
    return this.http.put(`${environment.apiUrl}/users/${id}/report/${date}`, body)
  }
  postUserReportfromUID(id, body) {
    return this.http.post(`${environment.apiUrl}/users/${id}/report`, body)
  }

  getLeaderboard() {
    return this.http.get(`${environment.apiUrl}/leaderboard`)
  }
  getLeaderboardByOrg(org) {
    return this.http.get(`${environment.apiUrl}/leaderboard/${org}`)
  }

}
