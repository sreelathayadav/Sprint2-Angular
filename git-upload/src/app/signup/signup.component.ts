import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authordetails } from '../authordetails';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  author:Authordetails=new Authordetails();
 

  constructor(private adminService : AuthorserviceService, private router : Router) { }
  
  ngOnInit(): void {
  }
  saveCredentials(){
    console.log(this.author); 
    
    
   this.adminService.saveCredentials(this.author).subscribe({
    next: (res:Response)=>{
      
      console.log("Registrayion success" ,res);
      
     this.router.navigate(["/login"]);
     },
  error: (err:any)=>{
    console.log(err);
    alert("Registration success,Please login");
    this.router.navigate(["/login"]);``
}
  })
  
  }
}


   


