import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  // Se muestra en la ruta /registro (ver app.routes.ts)
  selector: 'app-registro',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  private formBuilder = inject(FormBuilder);

  registroForm = this.formBuilder.group({
    // Los validadores van como segundo elemento del array
    nombre: ['', Validators.required],
    email: ['', Validators.required],

    direccion: this.formBuilder.group({
      calle: [''],
      ciudad: [''],
    }),
  });

  onSubmit() {
    console.log(this.registroForm.value);
  }

  cargarDireccionDePrueba() {
    this.registroForm.patchValue({
      direccion: {
        calle: 'Av. Roca 1757',
        ciudad: 'San Miguel de Tucumán',
      },
    });
  }
}
