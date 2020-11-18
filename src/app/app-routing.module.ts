import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './features/home-page/home-page.component';
import { ProfilePageComponent } from './features/profile-page/profile-page.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
