# Recorrido completo de los datos en el Login

Qué pasa desde que el usuario escribe su email y contraseña hasta que ve el token.

- **Frontend (este repo):** Angular en `http://localhost:4200`
- **Backend:** API .NET en `http://localhost:5006` (repo ProgramacionIII-CARLA-Backend)

```
 ANGULAR (navegador)                         API .NET (servidor)                     MySQL
 ───────────────────                         ───────────────────                     ─────
 1. LoginComponent  (pantalla)
        │ el usuario completa el formulario
 2. ReactiveFormsModule (valida el form)
        │ arma un LoginModel {email, password}
 3. UserService.login()
        │
 4. HttpClient ── POST /api/User/login ──►  5. CORS (permite localhost:4200)
                  JSON {email, password}         │
                                             6. [ApiController] valida el LoginDTO
                                                 │  (si falta algo -> 400 Bad Request)
                                             7. UserController.Login()
                                                 │
                                             8. UserDAO.GetByEmail() ──────────►  9. Entity Framework
                                                 │                                   SELECT ... FROM Users
                                                 │  ◄──────────── User (con PasswordHash)
                                             10. BCrypt.Verify(password, hash)
                                                 │
                                       ┌─────────┴─────────┐
                                  incorrecto           correcto
                                       │                   │
                              401 Unauthorized     11. TokenService genera el JWT firmado
                                       │                   │
                                       │           200 OK {token, user}
 12. subscribe() ◄─────────────────────┴───────────────────┘
        ├─ error (401) -> muestra "Email o contraseña incorrectos."
        └─ next  (200) -> muestra "Bienvenido/a" y el token
```

## Paso a paso

### En Angular

1. **LoginComponent** (`src/app/pages/login/`): es la pantalla. Muestra el formulario con Email y Password.
2. **Formulario reactivo** (`ReactiveFormsModule`): el `FormGroup` agrupa los campos.
   `Validators.required` y `Validators.email` controlan los datos antes de enviarlos.
   Si el formulario es inválido, no se hace ningún pedido.
3. Al tocar "Iniciar sesión", `(ngSubmit)` ejecuta `login()`, que arma un
   **LoginModel** (`src/app/models/LoginModel.ts`): `{ email, password }`.
4. **UserService** (`src/app/services/user-service.ts`) recibe el LoginModel y usa
   **HttpClient** para hacer el pedido:

   ```
   POST http://localhost:5006/api/User/login
   Content-Type: application/json

   { "email": "carla@email.com", "password": "123456" }
   ```

   A la API no le importa si el pedido viene de Angular, Swagger o Postman:
   recibe exactamente lo mismo.

### En la API (.NET)

5. **CORS**: como Angular (puerto 4200) y la API (puerto 5006) son "orígenes" distintos,
   el navegador pregunta primero si está permitido. La política `Frontend` de `Program.cs` lo autoriza.
6. **Validación automática**: `[ApiController]` convierte el JSON en un **LoginDTO** y revisa
   los atributos `[Required]` y `[EmailAddress]`. Si algo falla, responde **400 Bad Request**
   sin entrar al controller.
7. **UserController.Login()** recibe el LoginDTO.
8. **UserDAO.GetByEmail()** busca el usuario.
9. **Entity Framework** traduce esa búsqueda a SQL (`SELECT ... FROM Users WHERE Email = ...`)
   y la ejecuta en **MySQL**. Devuelve el usuario con su `PasswordHash`.
10. **BCrypt.Verify()** compara la contraseña escrita con el hash guardado.
    La contraseña real nunca se guarda: solo el hash, que no se puede revertir.
    - Si el usuario no existe o la contraseña no coincide → **401 Unauthorized**
      (se responde lo mismo en los dos casos para no revelar qué emails existen).
11. Si es correcta, **TokenService** genera un **JWT** firmado con la clave secreta
    (`Jwt:Key` en `appsettings.Development.json`) y la API responde **200 OK**:

    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....",
      "user": { "id": 1, "fullname": "Carla Plano", "dni": "...", "email": "...", "username": "..." }
    }
    ```

    Se devuelve un **UserResponseDTO**, no la entidad `User`: así el hash de la contraseña
    nunca sale del servidor.

### De vuelta en Angular

12. `subscribe()` recibe la respuesta:
    - **error** (401) → se muestra "Email o contraseña incorrectos."
    - **next** (200) → se guarda el token en un `signal` y se muestra en pantalla.

## ¿Para qué sirve el token?

El JWT demuestra que el usuario ya inició sesión. En los siguientes pedidos se envía en el encabezado:

```
Authorization: Bearer eyJhbGciOi...
```

Los endpoints con `[Authorize]` (por ejemplo `GET /api/User`) solo responden si el token
es válido: está firmado por la API, no está vencido y no fue modificado.
Sin token responden **401**.

## Quién hace qué

| Elemento | ¿Qué hace? |
|---|---|
| LoginComponent | Maneja la pantalla |
| ReactiveFormsModule | Maneja el formulario |
| LoginModel | Representa los datos a enviar |
| UserService | Se comunica con la API |
| HttpClient | Realiza el POST |
| LoginDTO | Recibe los datos en C# |
| UserController | Procesa el login |
| UserDAO | Busca el usuario |
| Entity Framework | Accede a la base de datos |
| BCrypt | Verifica la contraseña |
| TokenService (JWT) | Genera el token firmado |

## Cómo probarlo

1. Levantar la API: en la carpeta del backend, `dotnet run --project API --launch-profile http`
2. Crear un usuario desde Swagger (`http://localhost:5006/swagger`) con `POST /api/User/register`.
3. Levantar Angular: en esta carpeta, `npm install` (solo la primera vez) y después `npm start`.
4. Entrar a `http://localhost:4200/login` e iniciar sesión.
