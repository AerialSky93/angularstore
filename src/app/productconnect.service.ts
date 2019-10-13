
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductconnectService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:40085/Products1';

 constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

   public getAll() {
    // Get all product data
    return this.http.get('http://localhost:40085/api/products2')
  }

}
