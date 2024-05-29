import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SectionsComponent } from '../sections/sections.component';
import { AttroneysComponent } from '../attroneys/attroneys.component';
import { AtroComponent } from '../atro/atro.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-userhome',
  standalone: true,
  imports: [RouterLink,SectionsComponent,RouterOutlet,AttroneysComponent,AtroComponent,HomeComponent],
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent {

}
