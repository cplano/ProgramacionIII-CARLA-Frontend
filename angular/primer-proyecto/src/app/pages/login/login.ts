import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../services/user-service';
import { LoginModel } from '../../models/LoginModel';

@Component({
  // Se muestra en la ruta /login (ver app.routes.ts)
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  token = signal<string | null>(null);
  usuario = signal<string | null>(null);
  mensajeError = signal<string | null>(null);
  cargando = signal(false);

  // Angular inyecta el servicio en el constructor
  constructor(private userService: UserService) {}

  login() {
    // Si el formulario no cumple los Validators, no se envia nada
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.token.set(null);
    this.usuario.set(null);
    this.mensajeError.set(null);
    this.cargando.set(true);

    const loginModel: LoginModel = this.loginForm.getRawValue();

    this.userService.login(loginModel).subscribe({
      // next: la API respondio 200 OK -> credenciales correctas
      next: (respuesta) => {
        this.token.set(respuesta.token);
        this.usuario.set(respuesta.user.fullname);
        this.cargando.set(false);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 401) {
          // 401 Unauthorized: email o contraseña incorrectos
          this.mensajeError.set('Email o contraseña incorrectos.');
        } else if (err.status === 0) {
          this.mensajeError.set('No se pudo conectar con la API. ¿Está ejecutándose?');
        } else {
          this.mensajeError.set('Ocurrió un error al iniciar sesión.');
        }
        this.cargando.set(false);
      },
    });
  }
}
