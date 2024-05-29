import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
 
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { LogComponent } from './log/log.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { SectionsComponent } from './sections/sections.component';
import { AttroneysComponent } from './attroneys/attroneys.component';
import { LawhomeComponent } from './lawhome/lawhome.component';
import { LawloginComponent } from './lawlogin/lawlogin.component';
import { AtroComponent } from './atro/atro.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,AboutComponent,SignupComponent,NavComponent,LogComponent,UserhomeComponent,SectionsComponent,AttroneysComponent,LawhomeComponent,LawloginComponent,AtroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'justiport';
}
