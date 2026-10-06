import { Component } from '@angular/core';

@Component({
  // Se usa en app.html como <app-footer></app-footer>
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
// Componente reutilizable: por eso está en la carpeta "components"
export class Footer {}
