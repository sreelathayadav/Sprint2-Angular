import { Component, Input, OnInit } from '@angular/core';
import { Createbook } from '../createbook';
import { BookserviceService } from '../bookservice.service';
import { Book } from '../book';
@Component({
  selector: 'app-searchbookresponse',
  templateUrl: './searchbookresponse.component.html',
  styleUrls: ['./searchbookresponse.component.scss']
})
export class SearchbookresponseComponent implements OnInit {
 // @Input() category:string;
@Input() book!:Createbook;

  constructor(private bookService : BookserviceService) { }
 
  ngOnInit(): void {
  }

}
