import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseUrl } from '../../../environments/environment';
import { catchError, throwError } from 'rxjs';
import { ProductModel, ProductsAPIError } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsAPI {
  private http = inject(HttpClient);
  private productsLink = "products/";
  
  getProducts() {
    return this.http.get<ProductModel[]>(baseUrl + this.productsLink).pipe(
      // Error personalizado
      catchError(error => {
        console.log("Error en la API: ", error);

        return throwError(() => new ProductsAPIError("Error al cargar todos los productos. Estado: " + error.status, error.status));
      })
    );
  }

  getProductDetails(id: number) {
    return this.http.get<ProductModel>(baseUrl + this.productsLink + id).pipe(
      catchError(error => {
        console.log("Error en la API: ", error);

        return throwError(() => new ProductsAPIError("Error al cargar el producto con id " + id + " .Estado: " + error.status, error.status));
      })
    );
  }
}
