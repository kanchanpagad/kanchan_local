import { LeadingComment } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AppComponent } from './app.component';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormComponent } from './form/form.component';
import { Subject1Component } from './subject1/subject1.component';
import { Subject2Component } from './subject2/subject2.component';

const routes: Routes = [
  {path :'',component :LandingComponent},
  {path: 'landing',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  { path : 'directives', component: DirectivesInAngularComponent},
  {path : 'lifecyclehook', component:LifecyclehookComponent},
  {path :'parent',component : ParentComponent},
  {path : 'child',component :ChildComponent },
  { path:'form', component: FormComponent},
  { path:'subject1', component: Subject1Component},
  { path:'subject2', component: Subject2Component},

  
  
  {path:'user',loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)},
  
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule],
})
export class AppRoutingModule { }
