import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdemoComponent } from '../user/userdemo/userdemo.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';




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
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
  
    
  ],
  exports:[
    UserdemoComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //NumbersOnlyDirective,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
    
  ]
})
export class SharedModule { }
