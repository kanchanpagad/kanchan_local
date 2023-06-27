import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdemoComponent } from '../user/userdemo/userdemo.component';



@NgModule({
  declarations: [],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    UserdemoComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
