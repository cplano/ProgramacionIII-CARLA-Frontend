import { Component } from '@angular/core';

@Component({
  // Se usa en app.html como <app-header></app-header>
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
// Componente reutilizable: por eso está en la carpeta "components"
export class Header {}
