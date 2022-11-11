import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, 
  children: [
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'dashboard', component: PlaceholderComponent },
    { path: 'payments', component: PlaceholderComponent },
    { path: 'messages', component: PlaceholderComponent },
    { path: 'settings', component: PlaceholderComponent },
    { path: 'logout', component: PlaceholderComponent },
  ], },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
