import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdemoComponent } from '../user/userdemo/userdemo.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [],


  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  
    
  ],
  exports:[
    UserdemoComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
    
  ]
})
export class SharedModule { }
