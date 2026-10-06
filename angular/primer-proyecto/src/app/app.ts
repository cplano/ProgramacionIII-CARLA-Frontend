// Importamos el decorador Component, que convierte una clase en un componente de Angular
import { Component } from '@angular/core';
// RouterOutlet: el "hueco" donde se dibuja el componente de la ruta actual
import { RouterOutlet } from '@angular/router';

// Importamos las clases de los componentes que vamos a usar dentro de App.
// Las rutas son relativas a este archivo (./ = carpeta actual "app").
// Dashboard y Login ya no se importan aca: los muestra el router (ver app.routes.ts).
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  // selector: nombre de la etiqueta HTML de este componente.
  // <app-root> está en src/index.html y es donde arranca toda la app.
  selector: 'app-root',

  // imports: como los componentes son "standalone", hay que declarar acá
  // los componentes que se usan en el template. Si no los importamos,
  // Angular no reconoce <app-header>, <router-outlet> ni <app-footer>.
  imports: [Header, RouterOutlet, Footer],

  // templateUrl: archivo HTML con la vista del componente
  templateUrl: './app.html',

  // styleUrl: archivo CSS con los estilos (solo afectan a este componente)
  styleUrl: './app.css'
})
// Clase del componente raíz. Está vacía porque por ahora no necesita lógica.
export class App {
}
