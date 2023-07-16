import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdemoComponent } from '../user/userdemo/userdemo.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    UserdemoComponent
  ],


  imports: [CommonModule,  
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    //MatCheckboxModule,
    //MatInputModule,
  
    
  ],
  exports:[
    UserdemoComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //NumbersOnlyDirective,
    MatButtonModule,
    //MatCheckboxModule,
    //MatInputModule
    
  ]
})
export class SharedModule { }
