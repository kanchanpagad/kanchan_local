import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerhomepageComponent } from './ownerhomepage/ownerhomepage.component';
import { SharedModule } from '../common/shared/shared.module';
import { OwnerSignUpComponent } from './owner-sign-up/owner-sign-up.component';
import { OwnerSuccsessComponent } from './owner-succsess/owner-succsess.component';


@NgModule({
  declarations: [
    OwnerhomepageComponent,
    OwnerSignUpComponent,
    OwnerSuccsessComponent
    
  ],    
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule

   
  ],
  
})
export class OwnerModule { }
