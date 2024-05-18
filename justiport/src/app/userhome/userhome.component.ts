import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SectionsComponent } from '../sections/sections.component';
import { AttroneysComponent } from '../attroneys/attroneys.component';

@Component({
  selector: 'app-userhome',
  standalone: true,
  imports: [RouterLink,SectionsComponent,RouterOutlet,AttroneysComponent],
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent {

}
