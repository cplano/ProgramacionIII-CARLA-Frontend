import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';

// RUTAS de la aplicacion: cada ruta asocia una URL con un componente.
// El componente de la ruta actual se dibuja donde esta <router-outlet> (en app.html).
export const routes: Routes = [
  // path '' = la pagina de inicio (localhost:4200) -> muestra el Dashboard
  { path: '', component: Dashboard },
  // localhost:4200/login -> muestra el Login
  { path: 'login', component: Login },
  // '**' = cualquier otra URL que no exista -> redirige al inicio
  { path: '**', redirectTo: '' },
];
