import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Pasatiempos } from './pages/pasatiempos/pasatiempos';

// RUTAS de la aplicacion: cada ruta asocia una URL con un componente.
// El componente de la ruta actual se dibuja donde esta <router-outlet> (en app.html).
// title: Angular cambia automaticamente el titulo de la pestaña del navegador
// al entrar en cada ruta (importante para la accesibilidad).
// El ORDEN importa: Angular usa la PRIMERA ruta que coincide con la URL.
export const routes: Routes = [
  // path '' = la pagina de inicio (localhost:4200) -> muestra el Dashboard
  { path: '', component: Dashboard, title: 'Inicio' },
  // localhost:4200/login -> muestra el Login
  { path: 'login', component: Login, title: 'Iniciar sesión' },
  // Ejercicios de Angular Forms
  { path: 'registro', component: Registro, title: 'Registro' },
  { path: 'pasatiempos', component: Pasatiempos, title: 'Pasatiempos' },
  // '**' = COMODIN: cualquier otra URL que no exista -> redirige al inicio.
  // Va siempre AL FINAL, porque coincide con todo.
  { path: '**', redirectTo: '' },
];
