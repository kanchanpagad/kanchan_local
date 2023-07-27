import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../common/shared/shared.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';



@NgModule({
  declarations: [

    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  
})
export class AdminModule { }
