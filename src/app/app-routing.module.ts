import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';
import { LeaderboardComponent } from './features/leaderboard/leaderboard.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'leaderboard', component: LeaderboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
