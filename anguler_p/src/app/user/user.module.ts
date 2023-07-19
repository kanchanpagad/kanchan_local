import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import {UserActivityComponent } from './user-activity/user-activity.component';
//import { UserdemoComponent } from './userdemo/userdemo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from'@angular/common/http';
import { ApicallComponent } from './apicall/apicall.component';
import { MatButtonModule } from '@angular/material/button';
 



@NgModule({
  declarations: [
    UserActivityComponent,
    //UserdemoComponent,
    ApicallComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,


    
  ]
})
export class UserModule { }
