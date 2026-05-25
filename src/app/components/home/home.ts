import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'app-home',
  imports: [Product],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
