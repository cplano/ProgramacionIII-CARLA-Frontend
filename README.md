# Programación III - Frontend (Carla Plano)

Trabajos de frontend de la materia. El backend (API .NET) está en un repositorio aparte.

| Carpeta | Trabajo |
|---------|---------|
| `guia-css-1` | Guía CSS 1 |
| `formulario-encuesta` | Formulario de encuesta |
| `cubo-animado` | Cubo animado con CSS |
| `pagina-de-negocio` | Página de negocio |
| `control-de-flujos` | Control de flujos, ciclos e iteraciones |
| `funciones` | Funciones (actividades 1 y 2) |
| `arrays` | Arrays (ejercicios 1 y 2) |
| `objetos` | Objetos |
| `angular/primer-proyecto` | Proyecto Angular: Header, Dashboard, Footer, **Login** y ejercicios de **Angular Forms** |

## Proyecto Angular

```bash
cd angular/primer-proyecto
npm install
npm start
```

- `http://localhost:4200/` → Dashboard
- `http://localhost:4200/login` → Login (necesita la API del backend ejecutándose en `http://localhost:5006`)
- `http://localhost:4200/registro` → Ejercicio 1 de Forms: registro con FormBuilder, validaciones, grupo anidado y patchValue
- `http://localhost:4200/pasatiempos` → Ejercicio 2 de Forms: formulario dinámico con FormArray

El recorrido completo de los datos del login está explicado en
[`angular/primer-proyecto/RECORRIDO-LOGIN.md`](angular/primer-proyecto/RECORRIDO-LOGIN.md).
