import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lawhome',
  standalone: true,
  imports: [HomeComponent,RouterLink],
  templateUrl: './lawhome.component.html',
  styleUrl: './lawhome.component.css'
})
export class LawhomeComponent {

}
