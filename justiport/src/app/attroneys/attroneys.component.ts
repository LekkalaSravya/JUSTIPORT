import { Component, NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule ,FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { FilterPipe } from '../filter.pipe';
import { AtroComponent } from '../atro/atro.component';


@Component({
  selector: 'app-attroneys',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,FilterPipe,AtroComponent],
  templateUrl: './attroneys.component.html',
  styleUrl: './attroneys.component.css'
})
export class AttroneysComponent {
  searchText:any;
  readUser:any;
 constructor(private api:AuthService){}
  ngOnInit():void{
    this.getAlldata();
  
  }
 
  getAlldata(){
    this.api.getAllUser().subscribe((res)=>{
      console.log('Get All Data ',res);
      this.readUser=res.data;
    })
  }
  
}
