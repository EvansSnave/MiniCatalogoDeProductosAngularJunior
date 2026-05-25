import { Component, input } from '@angular/core';
import { IOptimizedImage } from '../../interfaces';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'optimized-image',
  imports: [NgOptimizedImage],
  templateUrl: './optimized-image.html',
  styleUrl: './optimized-image.scss',
})
export class OptimizedImage {
  image = input.required<IOptimizedImage>();
  // Input para elegir como se debe cargar la imagen. Por defecto "lazy"
  loading = input<"lazy" | "eager">("lazy");
}
