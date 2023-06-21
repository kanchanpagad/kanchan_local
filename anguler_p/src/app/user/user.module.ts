import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserActivityComponent } from './user-activity/user-activity.component';
import { UserdemoComponent } from './userdemo/userdemo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 console.log('user module');



@NgModule({
  declarations: [
    UserActivityComponent,
    UserdemoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,ReactiveFormsModule,
  ]
})
export class UserModule { }
