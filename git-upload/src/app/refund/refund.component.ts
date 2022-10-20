import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss']
})
export class RefundComponent implements OnInit {
boo:Book=new Book();
  constructor() { }

  ngOnInit(): void {
  }
  refund()
  {

  }

}
