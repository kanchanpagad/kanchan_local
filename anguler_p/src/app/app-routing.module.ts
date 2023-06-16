import { LeadingComment } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';

const routes: Routes = [
  {path :'',component :LandingComponent},
  {path: 'landing',component:LeadingComment},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component: SigninComponent},
  {path:'user',loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)},
  { path : 'directives', component: DirectivesInAngularComponent},
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule],
})
export class AppRoutingModule { }
