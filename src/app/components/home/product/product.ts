import { Component, computed, inject, resource, signal } from '@angular/core';
import { ProductsAPI } from '../../../services/products-api/products-api';
import { firstValueFrom } from 'rxjs';
import { RouterLink } from "@angular/router";
import { OptimizedImage } from '../../optimized-image/optimized-image';

@Component({
  selector: 'product',
  imports: [RouterLink, OptimizedImage],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  // Servicio para obtener los productos
  productService = inject(ProductsAPI);

  // Array de productos desde la API
  products = resource({
    loader: () => firstValueFrom(this.productService.getProducts())
  });

  // Señal de busqueda
  searchQuery = signal("");

  filteredItems = computed(() => {
    // Pasar la busqueda a minuscula
    const query = this.searchQuery().toLowerCase();
    // Filtrar el titulo de los productos
    return this.products.value()?.filter(product => product.title.toLowerCase().includes(query));
  });

  // Funcion para sincronizar el valor de input con searchQuery
  updateQuery(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  };
}
