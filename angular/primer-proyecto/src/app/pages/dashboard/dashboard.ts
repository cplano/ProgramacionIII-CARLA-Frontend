import { Component } from '@angular/core';

@Component({
  // Se usa en app.html como <app-dashboard></app-dashboard>
  selector: 'app-dashboard',

  // No usa otros componentes adentro, así que la lista queda vacía
  imports: [],

  // Vista y estilos del dashboard
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
// Está en la carpeta "pages" porque representa una página/pantalla completa,
// a diferencia de "components", que son piezas reutilizables (header, footer).
export class Dashboard {}
