import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserActivityComponent } from './user-activity/user-activity.component';
import { UserdemoComponent } from './userdemo/userdemo.component';
import { ApicallComponent } from './apicall/apicall.component';
//import { ApicallComponent } from '../apicall/apicall.component';

const routes: Routes = [
  {path:'userActivity', component : UserActivityComponent},
  {path:'userdemo',component : UserdemoComponent},
{path:'apicall',component:ApicallComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
