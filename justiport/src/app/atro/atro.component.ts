import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SectionsComponent } from '../sections/sections.component';
import { UserhomeComponent } from '../userhome/userhome.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-atro',
  standalone: true,
  imports: [CommonModule,FormsModule,FilterPipe,ReactiveFormsModule,RouterLink,SectionsComponent,UserhomeComponent,HomeComponent],
  templateUrl: './atro.component.html',
  styleUrl: './atro.component.css'
})
export class AtroComponent {
  readUser:any;
  searchText:any;
  getparamid:any;
  constructor(private api:AuthService,private router:ActivatedRoute){}
  ngOnInit():void{
    this.getparamid=this.router.snapshot.paramMap.get('id');
    this.getAlldata(this.getparamid);
  }
 
  getAlldata(id:any){
    this.api.getIdData(id).subscribe((res)=>{
      console.log('Get All Data ',res);
      this.readUser=res.data;
    })
  }
}
