import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false

  constructor(private adminService : AuthorserviceService,private router : Router) { }

  ngOnInit(): void {
  }
  // checkLogin() {
  //   (this.adminService.authenticate(this.username, this.password).subscribe(
  //     data => {
  //       this.router.navigate([''])
  //       this.invalidLogin = false
  //     },
  //     error => {
  //       this.invalidLogin = true

  //     }
  //   )
  //   );

  // }

}
