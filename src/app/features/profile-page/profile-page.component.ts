import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(private auth: AuthService) { }

  user: User;

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.user = user
      this.thisGetUserID()
    })
  }

  thisGetUserID() {
    // this.api.getUserUserID(this.user.uid)
    //   .subscribe(user => {
    //     this.profile = user
    // })
  }

  formatLabel(value: number) {
    return value + 'hrs';
  }

}
