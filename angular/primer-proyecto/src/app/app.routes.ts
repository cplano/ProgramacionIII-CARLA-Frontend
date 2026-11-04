import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Pasatiempos } from './pages/pasatiempos/pasatiempos';

export const routes: Routes = [
  { path: '', component: Dashboard, title: 'Inicio' },
  { path: 'login', component: Login, title: 'Iniciar sesión' },
  // Ejercicios de Angular Forms
  { path: 'registro', component: Registro, title: 'Registro' },
  { path: 'pasatiempos', component: Pasatiempos, title: 'Pasatiempos' },
  { path: '**', redirectTo: '' },
];
