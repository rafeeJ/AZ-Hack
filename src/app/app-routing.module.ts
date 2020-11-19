import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';
import { DailyMealsComponent } from './features/daily-meals/daily-meals.component';
import { DailyTravelComponent } from './features/daily-travel/daily-travel.component';
import { DailyRecyclingComponent } from './features/daily-recycling/daily-recycling.component';
import {DailyElecComponent} from './features/daily-elec/daily-elec.component';
DailyElecComponent


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'meals', component: DailyMealsComponent},
  {path: 'travel', component: DailyTravelComponent },
  {path: 'recycling', component: DailyRecyclingComponent},
  {path: 'elec', component: DailyElecComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

