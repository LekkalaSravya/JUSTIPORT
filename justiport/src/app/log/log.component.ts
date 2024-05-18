import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule ,Validators,FormGroup,FormControl} from '@angular/forms';
 
import { Router, RouterLink } from '@angular/router';
 

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [HttpClientModule,CommonModule ,FormsModule , RouterLink],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  errMsg:any;
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient,private router:Router) {}

  login() {
    this.http.post('http://localhost:7000/login', { email: this.email, password: this.password })
      .subscribe((response: any) => {
        console.log(response.message);
        this.router.navigate(['/uslo']);
        // Handle successful login
      }, (error) => {
        console.error(error.error.message);
        // Handle login error
        this.errMsg='Wrong Credientials';
      })
  
}
}
