import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';
import { Createbook } from '../createbook';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {
  books: Createbook[]=[];
  constructor(private bookService : BookserviceService) { }

  ngOnInit(): void {

  //   this.bookService.getBooks().subscribe((data: Createbook[]) => {

  //     console.log(data);

  //     this.books = data;

  // });

  }

 

}


