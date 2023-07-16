import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { CharOnlyDirective } from './char-only.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './filter.pipe';
import { MatButtonModule } from '@angular/material/button';
import { CommonsharedModule } from './commonshared/commonshared.module';

//import { ApicallComponent } from './apicall/apicall.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    DirectivesInAngularComponent,
    LifecyclehookComponent,
    ParentComponent,
    ChildComponent,
    FormComponent,
    CharOnlyDirective,
    FilterPipe,
    
    
    
   // ApicallComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   ReactiveFormsModule,
     //SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CommonsharedModule,


  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
