import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    // '**' = comodin: aplica a TODAS las rutas
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
