
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductconnectService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:40085/Products2';

 constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

   public getAll() {
    // Get all product data
    return this.http.get('http://localhost:40085/api/products2')
  }

  public addProduct (product: Product): Observable<Product> { 

    return this.http.post<Product>('http://localhost:40085/api/products2', product)
  }

  public editproduct (product: Product): Observable<Product> { 

    return this.http.put<Product>('http://localhost:40085/api/products2/2', product)
  }

  public getproduct(){ 

    return this.http.get('http://localhost:40085/api/products2/2')
  }


}
