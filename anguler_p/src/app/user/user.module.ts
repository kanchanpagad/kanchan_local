import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserActivityComponent } from './user-activity/user-activity.component';
import { UserdemoComponent } from './userdemo/userdemo.component';
 console.log('user module');



@NgModule({
  declarations: [
    UserActivityComponent,
    UserdemoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
