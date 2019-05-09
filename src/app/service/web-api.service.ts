import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebAPIService {

  constructor(private http: HttpClient) { }

  getCommentsData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
