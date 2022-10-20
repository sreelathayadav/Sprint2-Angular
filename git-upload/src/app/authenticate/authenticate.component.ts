import { Component, OnInit } from '@angular/core';
import { AuthorserviceService } from '../authorservice.service';
import { Token } from '../token';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {
  auth:Token=new Token();
  constructor(private authserve:AuthorserviceService) { }

  ngOnInit(): void {
  }
  GetToken(){

    console.log(this.auth);

   

   this.authserve.GetToken(this.auth).subscribe({

    next: (res:any)=>{

      localStorage.clear()

      localStorage.setItem("token",res.token)

      // console.log("Book created successfully" ,res);

      // alert("Book saved successfully")

  },

  error: (err:any)=>{

    console.log(err);

   

}

  })

 

  }


}
