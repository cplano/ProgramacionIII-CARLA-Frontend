import { Component } from '@angular/core';
// RouterLink: permite navegar entre rutas sin recargar la pagina
import { RouterLink } from '@angular/router';

@Component({
  // Se usa en app.html como <app-header></app-header>
  selector: 'app-header',
  // Se importa RouterLink porque header.html usa routerLink en los enlaces
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
// Componente reutilizable: por eso está en la carpeta "components"
export class Header {}
