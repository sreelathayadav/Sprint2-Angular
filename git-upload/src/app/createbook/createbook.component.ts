import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';
import { Createbook } from '../createbook';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.scss']
})
export class CreatebookComponent implements OnInit {
  book:Createbook=new Createbook();
  constructor(private bookService : BookserviceService, private router : Router) { }

  ngOnInit(): void {
  }
  
 //Create Book starts 
  createBook(){
    console.log(this.book); 
    this.bookService.createBook(this.book).subscribe({
    next: (res:any)=>{
       console.log("Book created successfully" ,res);
       alert("Book created successfully");
       this.router.navigate([""]);
},
  error: (err:any)=>{
    console.log(err);
   }
  })
  }
  //Create Book ends
  

}
