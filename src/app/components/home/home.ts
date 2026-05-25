import { Component } from '@angular/core';
import { Welcome } from './welcome/welcome';

@Component({
  selector: 'app-home',
  imports: [Welcome],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
