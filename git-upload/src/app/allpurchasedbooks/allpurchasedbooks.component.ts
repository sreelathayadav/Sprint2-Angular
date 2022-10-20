import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-allpurchasedbooks',
  templateUrl: './allpurchasedbooks.component.html',
  styleUrls: ['./allpurchasedbooks.component.scss']
})
export class AllpurchasedbooksComponent implements OnInit {
  book:Book=new Book();
  constructor() { }

  ngOnInit(): void {
  }
  getAllpurchsedBooks()
  {
    
  }
  

}
