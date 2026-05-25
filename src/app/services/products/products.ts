import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseUrl } from '../../../environments/environment';
import { ProductModel } from '../../interfaces/productModel';

@Injectable({
  providedIn: 'root',
})
export class Products {
  private http = inject(HttpClient);
  getProduct() {
    return this.http.get<ProductModel[]>(baseUrl + "products");
  }
}
