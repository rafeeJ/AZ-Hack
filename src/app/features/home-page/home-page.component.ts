import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public auth: AuthService) { }

  name: string = ""

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.name = user.displayName
      console.log(this.name)
    })
  }

}
