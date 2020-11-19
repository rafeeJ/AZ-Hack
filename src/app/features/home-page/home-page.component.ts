import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public auth: AuthService, private router:Router) { }

  goToPage(pageName:string):void{
    this.router.navigate([pageName])
  }  

  ngOnInit(): void {

  }



}


