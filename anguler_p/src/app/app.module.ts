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
import { Subject1Component } from './subject1/subject1.component';
import { Subject2Component } from './subject2/subject2.component';
import { Subject3Component } from './subject3/subject3.component';
import { SharedModule } from './shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';


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
    Subject1Component,
    Subject2Component,
    Subject3Component,
    Parent1Component,
    Child1Component,
  // ApicallComponenst,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   ReactiveFormsModule,
     SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  

    


  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
