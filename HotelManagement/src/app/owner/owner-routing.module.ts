import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerhomepageComponent } from './ownerhomepage/ownerhomepage.component';
import { OwnerSignUpComponent } from './owner-sign-up/owner-sign-up.component';
import { OwnerSuccsessComponent } from './owner-succsess/owner-succsess.component';

const routes: Routes = [
  {path:'',component:OwnerhomepageComponent},
  { path:'ownerhomepage', component: OwnerhomepageComponent},
  {path:'ownerSingup',component:OwnerSignUpComponent},
  {path:'ownerSuccess',component:OwnerSuccsessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
