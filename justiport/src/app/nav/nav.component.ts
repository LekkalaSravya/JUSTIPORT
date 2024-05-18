import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
 
import { HomeComponent } from '../home/home.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,RouterOutlet, HomeComponent,SignupComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
