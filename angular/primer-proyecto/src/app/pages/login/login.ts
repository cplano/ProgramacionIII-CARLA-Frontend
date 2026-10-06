import { Component, signal } from '@angular/core';
// Formularios reactivos: el formulario se define en TypeScript (no en el HTML)
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../services/user-service';
import { LoginModel } from '../../models/LoginModel';

@Component({
  // Se muestra en la ruta /login (ver app.routes.ts)
  selector: 'app-login',
  // ReactiveFormsModule habilita [formGroup] y formControlName en el HTML
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
// COMPONENTE LOGIN: maneja la PANTALLA (el formulario y los mensajes).
// No habla con la API directamente: eso lo hace UserService.
export class Login {
  // FormGroup: agrupa varios FormControl (cada campo) para manejarlos como un conjunto.
  // Validators: validaciones del lado del cliente (antes de enviar a la API).
  loginForm = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  // SIGNALS: variables "reactivas". Cuando cambia su valor con .set(),
  // Angular actualiza automaticamente la pantalla donde se usan.
  // En el HTML se leen llamandolas como funcion: token()
  token = signal<string | null>(null);         // Token recibido si el login sale bien
  usuario = signal<string | null>(null);       // Nombre del usuario logueado
  mensajeError = signal<string | null>(null);  // Mensaje si algo sale mal
  cargando = signal(false);                    // true mientras se espera la respuesta

  // Angular inyecta el servicio en el constructor
  constructor(private userService: UserService) {}

  // Se ejecuta al enviar el formulario: (ngSubmit)="login()" en el HTML
  login() {
    // Si el formulario no cumple los Validators, no se envia nada
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); // Muestra los errores de todos los campos
      return;
    }

    // Se limpia el resultado anterior y se activa el estado "cargando"
    this.token.set(null);
    this.usuario.set(null);
    this.mensajeError.set(null);
    this.cargando.set(true);

    // getRawValue() devuelve { email: '...', password: '...' } con el tipo LoginModel
    const loginModel: LoginModel = this.loginForm.getRawValue();

    // Se llama al servicio. subscribe() ENVIA el pedido y define que hacer con la respuesta:
    this.userService.login(loginModel).subscribe({
      // next: la API respondio 200 OK -> credenciales correctas
      next: (respuesta) => {
        this.token.set(respuesta.token);
        this.usuario.set(respuesta.user.fullname);
        this.cargando.set(false);
      },
      // error: la API respondio con un error (401, 400...) o no respondio
      error: (err: HttpErrorResponse) => {
        if (err.status === 401) {
          // 401 Unauthorized: email o contraseña incorrectos
          this.mensajeError.set('Email o contraseña incorrectos.');
        } else if (err.status === 0) {
          // status 0: no hubo respuesta (la API esta apagada o la bloqueo CORS)
          this.mensajeError.set('No se pudo conectar con la API. ¿Está ejecutándose?');
        } else {
          this.mensajeError.set('Ocurrió un error al iniciar sesión.');
        }
        this.cargando.set(false);
      },
    });
  }
}
