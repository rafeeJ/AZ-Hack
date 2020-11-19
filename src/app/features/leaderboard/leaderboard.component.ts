import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';

export interface LeaderboardUser {
  name: string;
  organisation: string[];
  dietScore: number;
  techScore: number;
  travelScore: number;
  recyclingScore: number;
  totScore: number;
}

const LeaderboardUserData: LeaderboardUser[] = [
  {name: "Jake", organisation: ["AzHacker1", "BestProgrammer"], dietScore: 30, techScore: 100, travelScore: 0, recyclingScore: 50, totScore: 180},
  {name: "Laurence", organisation: ["AzHacker3"], dietScore: 80, techScore: 90, travelScore: 20, recyclingScore: 20, totScore: 210},
  {name: "Rafee", organisation: ["AzHacker4"], dietScore: 50, techScore: 85, travelScore: 50, recyclingScore: 80, totScore: 265},
  {name: "Tom", organisation: ["AzHacker2"], dietScore: 80, techScore: 80, travelScore: 20, recyclingScore: 30, totScore: 210},
  {name: "Steve", organisation: ["AstraZenica"], dietScore: 100, techScore: 100, travelScore: 0, recyclingScore: 70, totScore: 270}
]

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'organisation', 'dietScore', 'techScore', 'travelScore', 'recyclingScore', 'totScore'];
  dataSource = new MatTableDataSource(LeaderboardUserData);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
}
}
