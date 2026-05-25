import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'my-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {}
