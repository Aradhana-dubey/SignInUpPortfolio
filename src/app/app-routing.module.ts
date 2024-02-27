import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './homepage/signin/signin.component';
import { SignupComponent } from './homepage/signup/signup.component';
import { AboutUsComponent } from './homepage/about-us/about-us.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
{path:'',
component:HomepageComponent},
  {path:'signin',
component:SigninComponent},
{path:'signup',
component:SignupComponent},
{
  path:'aboutus',
  component:AboutUsComponent
}];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }