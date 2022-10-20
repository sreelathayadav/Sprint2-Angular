import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authordetails } from '../authordetails';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  author:Authordetails=new Authordetails();
  constructor(private adminService : AuthorserviceService,private router : Router) { }

  ngOnInit(): void {
  }
  authorLogin(){
    console.log(this.author); 
    this.adminService.authorLogin(this.author).subscribe({
      next: (res:Response)=>{
      console.log("Login success" ,res);
      alert("Login success");
      this.router.navigate([""]);
      },
      error: (err:any)=>{
      console.log("error msg",err);
      alert("Login Failure");
    
      }
  })
  }

}
