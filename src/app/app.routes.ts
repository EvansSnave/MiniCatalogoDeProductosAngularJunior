import { Routes } from '@angular/router';
import { Home, ProductDetails } from './components';

export const routes: Routes = [
  { path: "", component: Home },
  { path: "products/:id", component: ProductDetails }
];
