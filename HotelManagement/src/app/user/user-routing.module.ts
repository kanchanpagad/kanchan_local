import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';

const routes: Routes = [

  {path:'',component: UserhomepageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
