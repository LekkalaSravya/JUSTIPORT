import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { SpiService } from '../spi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  errMsg:any;
  successMsg:any;
   constructor(private api:SpiService,private router:Router){}
   userForm = new FormGroup({
    'name': new FormControl('',Validators.required),
     
    'email': new FormControl('',Validators.required),
    'password': new FormControl('',Validators.required)
     
   })
   userSubmit(){
    // console.log(this.userForm.value);
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.api.createData(this.userForm.value).subscribe((res)=>{
        console.log(res,'Data Added Success');
        this.userForm.reset();
        this.successMsg=res.message;
        this.router.navigate(['/log']);
      });
    }
    else{
      this.errMsg='All Fields Are Required';
    }
}
}
