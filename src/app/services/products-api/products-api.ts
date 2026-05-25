import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseUrl } from '../../../environments/environment';
import { ProductModel } from '../../interfaces/productModel';

@Injectable({
  providedIn: 'root',
})
export class ProductsAPI {
  private http = inject(HttpClient);
  
  getProducts() {
    return this.http.get<ProductModel[]>(baseUrl + "products");
  }

  getProductDetails(id: number) {
    return this.http.get<ProductModel>(baseUrl + "products/" + id);
  }
}
