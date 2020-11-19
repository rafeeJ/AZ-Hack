import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-travel',
  templateUrl: './daily-travel.component.html',
  styleUrls: ['./daily-travel.component.scss']
})
export class DailyTravelComponent implements OnInit {
  car: number;
  bus: number;
  train: number;

  

  constructor() { }

  ngOnInit(): void {
  }

}
