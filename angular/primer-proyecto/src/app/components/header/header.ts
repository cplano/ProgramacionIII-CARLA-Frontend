import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  // Se usa en app.html como <app-header></app-header>
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
