import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Authordetails } from './authordetails';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorserviceService {
  //private  baseUrl = "http://localhost:9090/api/v1/digitalbooks/author/signup";
 

  constructor(private http:HttpClient ) { }
  saveCredentials(author : Authordetails) : Observable<any>
  {
      
      return this.http.post("http://localhost:9090/api/v1/digitalbooks/author/signup",author);
  }
  authorLogin(author : Authordetails) : Observable<any>
  {
      
      return this.http.post("http://localhost:9090/api/v1/digitalbooks/author/login",author);
  }
  

}
