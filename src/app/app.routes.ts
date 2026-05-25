import { Routes } from '@angular/router';
import { Home, Product, ProductDetails } from './components';

export const routes: Routes = [
  { path: "", component: Home },
  { path: "products", component: Product },
  { path: "products/:id", component: ProductDetails }
];
