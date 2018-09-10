import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<Product[]>('http://localhost:8080/api/products-api/products');
  }
}
