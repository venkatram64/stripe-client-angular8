import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8090/dev/product';

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProduct(product: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/save`,product);
  }

  updateProduct(id: number, product: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/edit`, product);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getProductList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/listAll`)
  }
}
