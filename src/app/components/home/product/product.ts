import { Component, computed, inject, resource, signal } from '@angular/core';
import { Products } from '../../../services/products/products';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  // Servicio para obtener los productos
  productService = inject(Products);

  // Array de productos desde la API
  products = resource({
    loader: () => firstValueFrom(this.productService.getProduct())
  });

  // Señal de busqueda
  searchQuery = signal("");

  filteredItems = computed(() => {
    // Pasar la pusqueda a minuscula
    const query = this.searchQuery().toLowerCase();
    return this.products.value()?.filter(product => product.title.toLowerCase().includes(query));
  });

  updateQuery(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  };
}
