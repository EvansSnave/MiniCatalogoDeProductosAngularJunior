import { Component } from '@angular/core';
import { OptimizedImage } from '../../optimized-image/optimized-image';

@Component({
  selector: 'welcome',
  imports: [OptimizedImage],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss',
})
export class Welcome {}
