import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public auth: AuthService, public api: ApiService, public router: Router) { }

  user: User;
  profile: Profile;

  edited:boolean = false;
  submitted:boolean = false;
  selected: string;

  car: number;
  bus: number;
  train: number;
  phone: number;
  laptop: number;
  tv: number;

  paper: boolean;
  food: boolean;
  plastic: boolean;
  metal: boolean;
  glass: boolean;

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.user = user
      console.log(user);
      this.thisGetUserID()
    })
  }

  thisGetUserID() {
    this.api.getUserfromUID(this.user.uid)
      .subscribe(user => {
        this.profile = user
        this.selected = user.diet_default
        console.log(this.profile);
    })
  }

  formatLabel(value: number) {
    return value + 'hrs';
  }

  onChange($event) {
    console.log('There has been a change!');
    this.edited = true;
  }

  goToLeaderboard() {
    this.router.navigate(['leaderboard']);
  }

  submitForm() {
    this.submitted = true;

    const data = {
      //user_id: this.profile.uid,
      uid: this.profile.uid,
      //user_name: this.profile.displayName,
      displayName: this.profile.displayName,
      diet_default: this.selected,
      
      train_travel_default: this.train ? this.train : this.profile.train_travel_default,
      car_travel_default: this.car ? this.car : this.profile.car_travel_default,
      bus_travel_default: this.bus ? this.bus : this.profile.bus_travel_default,
      computer_screetime_default: this.laptop ? this.laptop : this.profile.computer_screetime_default,
      mobile_screentime_default: this.phone ? this.phone : this.profile.mobile_screentime_default,
      tv_screentime_default: this.tv ? this.tv : this.profile.tv_screentime_default,
      
      food_disposal_default: +this.food ? +this.food : this.profile.food_disposal_default,
      glass_disposal_default: +this.glass ? +this.glass : this.profile.glass_disposal_default,
      paper_disposal_default: +this.paper ? +this.paper : this.profile.paper_disposal_default,
      plastic_disposal_default: +this.plastic ? +this.plastic : this.profile.plastic_disposal_default,
      tin_disposal_default: +this.metal ? +this.metal : this.profile.tin_disposal_default,
    }

    console.log(data);
    

    this.api.postUserfromUID(data)
    
  }
}


