import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = '/api/v2/products';

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProduct(Product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Product);
  }

  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProductsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
