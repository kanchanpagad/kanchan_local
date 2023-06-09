import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserActivityComponent } from './user-activity/user-activity.component';
import { UserdemoComponent } from './userdemo/userdemo.component';

const routes: Routes = [
  {path:'userActivity', component : UserActivityComponent},
  {path:'userdemo',component : UserdemoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
