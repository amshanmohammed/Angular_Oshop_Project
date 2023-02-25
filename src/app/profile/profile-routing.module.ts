import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
  
  {
    path: '**',
    redirectTo: '/user-profile',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProfileRoutingModule {}
