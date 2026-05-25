import { Component, inject, resource } from '@angular/core';
import { ProductsAPI } from '../../services/products-api/products-api';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  productService = inject(ProductsAPI);
  private route = inject(ActivatedRoute);

  product = resource({
    loader: async () => {

      const id = Number(
        this.route.snapshot.paramMap.get('id')
      );

      return await firstValueFrom(
        this.productService.getProductDetails(id)
      );
    }
  });
}
