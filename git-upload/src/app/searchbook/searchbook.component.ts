import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Createbook } from '../createbook';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.scss']
})
export class SearchbookComponent implements OnInit {
  category = ''
  author = ''
  price=''
  publisher=''
  book:Createbook=new Createbook();
  constructor(private bookService : BookserviceService) { }


  ngOnInit(): void {
  }
  // checkLogin()
  // {
  //   this.bookService.buyBook(this.category,this.author,this.price,this.publisher).subscribe({
  //     next: (res:Response)=>{
  //    console.log("Book Purchased successfully" ,res);
  //     },
  //     error: (err:any)=>{
  //     console.log(err);
  //     alert("Registration success,Please login");
      
  // }
  //   })
  // }
  
}
