import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { Createbook } from './createbook';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http:HttpClient ) { }
  createBook(book : Createbook) : Observable<any>
  {
     
      return this.http.post("http://localhost:9090/api/v1/digitalbooks/books/readers/1/books",book);
  }
   buyBook(book:Book) : Observable<any>
   {
     
       return this.http.post("http://localhost:9090/api/v1/digitalbooks/books/readers/buy",book);
   }

  //  getBooks(): Observable<Book[]>{

  //   return this.client.get<Book[]>("http://localhost:9090/api/v1/digitalbooks/books/readers/getBooks");

  // }

  
}
