import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { SharedModule } from '../common/shared/shared.module'




@NgModule({
  declarations: [
    UserhomepageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
  })
export class UserModule { }
