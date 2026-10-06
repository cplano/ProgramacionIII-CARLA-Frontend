import { RenderMode, ServerRoute } from '@angular/ssr';

// Reglas de como dibujar cada ruta en el servidor. Generado por Angular.
export const serverRoutes: ServerRoute[] = [
  {
    // '**' = comodin: aplica a TODAS las rutas
    path: '**',
    // Prerender: las paginas se generan como HTML al compilar (ng build),
    // no en cada visita. Es lo mas rapido para paginas que no cambian.
    renderMode: RenderMode.Prerender
  }
];
