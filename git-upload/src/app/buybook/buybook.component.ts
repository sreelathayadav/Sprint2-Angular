import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';
import { Createbook } from '../createbook';

@Component({
  selector: 'app-buybook',
  templateUrl: './buybook.component.html',
  styleUrls: ['./buybook.component.scss']
})
export class BuybookComponent implements OnInit {
  book:Book=new Book();
  constructor(private bookService : BookserviceService, private router : Router) { }

  ngOnInit(): void {
  }
  buyBook()
  {
    console.log(this.book); 
  //   this.bookService.buyBook(this.book).subscribe({
  //     next: (res:any)=>{
  //       console.log("You have purchased book successfully" ,res);
  // },
  //   error: (err:any)=>{
  //     console.log(err);
     
  // }
  //   })
  }

}
