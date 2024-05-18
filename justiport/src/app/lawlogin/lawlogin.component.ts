import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LawhomeComponent } from '../lawhome/lawhome.component';

@Component({
  selector: 'app-lawlogin',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,LawhomeComponent],
  templateUrl: './lawlogin.component.html',
  styleUrl: './lawlogin.component.css'
})
export class LawloginComponent {
  errMsg:any;
  email: string = '';
  password: string = '';

  constructor(private http:HttpClient,private router:Router) {}

  login() {
    this.http.post('http://localhost:7000/adlogin', { email: this.email, password: this.password })
      .subscribe((response: any) => {
        console.log(response.message);
        this.router.navigate(['/admhom']);
        // Handle successful login
      }, (error) => {
        console.error(error.error.message);
        // Handle login error
        this.errMsg='Wrong Credientials';
      })
  
}
}
