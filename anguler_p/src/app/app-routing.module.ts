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

const routes: Routes = [
  {path :'',component :LandingComponent},
  {path: 'landing',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  
  {path:'user',loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)},
  { path : 'directives', component: DirectivesInAngularComponent},
  {path : 'lifecyclehook', component:LifecyclehookComponent},
  {path :'parent',component : ParentComponent},
  {path : 'child',component :ChildComponent },
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule],
})
export class AppRoutingModule { }
