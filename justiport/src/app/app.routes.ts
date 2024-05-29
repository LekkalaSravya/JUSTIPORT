import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
 
import { SignupComponent } from './signup/signup.component';
import { LawloginComponent } from './lawlogin/lawlogin.component';
import { LogComponent } from './log/log.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { SectionsComponent } from './sections/sections.component';
import { AttroneysComponent } from './attroneys/attroneys.component';
import { LawhomeComponent } from './lawhome/lawhome.component';
import { AtroComponent } from './atro/atro.component';


export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"signup",component:SignupComponent},
    {path:"lawin",component:LawloginComponent},
    {path:'admhom',component:LawhomeComponent},
    {path:"log",component:LogComponent},
    {path:"uslo",component:UserhomeComponent},
    {path:"sec",component:SectionsComponent},
    {path:"attro",component:AttroneysComponent},
    {path:'at/:id',component:AtroComponent},
    {path:'at',component:AtroComponent}
   
];
