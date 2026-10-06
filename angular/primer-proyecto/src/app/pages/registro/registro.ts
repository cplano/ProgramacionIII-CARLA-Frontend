import { Component, inject } from '@angular/core';
// FormBuilder: servicio que crea FormGroup y FormControl con menos codigo.
// Validators: validaciones listas para usar (required, email, minLength...).
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// JsonPipe: permite mostrar un objeto como JSON en el HTML ({{ objeto | json }})
import { JsonPipe } from '@angular/common';

// EJERCICIO 1 - Formulario de Registro con Validaciones y Grupo Anidado
@Component({
  // Se muestra en la ruta /registro (ver app.routes.ts)
  selector: 'app-registro',
  // ReactiveFormsModule: habilita [formGroup], formControlName y formGroupName en el HTML
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  // PASO 1: inyectar el servicio FormBuilder.
  // inject() es la forma moderna de pedirle a Angular un servicio (igual que en el constructor).
  private formBuilder = inject(FormBuilder);

  // Definimos el FormGroup con formBuilder.group({...}).
  // Cada propiedad es un campo: ['valor inicial', validadores].
  // Es lo mismo que escribir: nombre: new FormControl('', Validators.required)
  registroForm = this.formBuilder.group({
    // Los validadores van como SEGUNDO elemento del array
    nombre: ['', Validators.required], // obligatorio
    email: ['', Validators.required],  // obligatorio

    // FORMGROUP ANIDADO: un grupo dentro de otro grupo.
    // En el valor final queda como un objeto adentro: { direccion: { calle, ciudad } }
    direccion: this.formBuilder.group({
      calle: [''],
      ciudad: [''],
    }),
  });

  // PASO 3 (a): se ejecuta al enviar el formulario: (ngSubmit)="onSubmit()".
  // .value devuelve todos los datos del formulario como un objeto.
  onSubmit() {
    console.log(this.registroForm.value);
  }

  // PASO 3 (b): patchValue() modifica SOLO las propiedades que le pasamos
  // y deja el resto como esta (nombre y email no se tocan).
  // En cambio, setValue() obliga a pasar TODOS los campos.
  cargarDireccionDePrueba() {
    this.registroForm.patchValue({
      direccion: {
        calle: 'Av. Roca 1757',
        ciudad: 'San Miguel de Tucumán',
      },
    });
  }
}
