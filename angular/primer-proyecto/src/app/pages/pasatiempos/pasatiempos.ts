import { Component, inject } from '@angular/core';
// FormArray: lista de controles que puede crecer o achicarse mientras se usa la pagina
import { FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

// EJERCICIO 2 - Formulario Dinamico de Pasatiempos con FormArray
// FormGroup se usa cuando la cantidad de campos es FIJA.
// FormArray se usa cuando es DINAMICA: el usuario agrega los campos que necesite.
@Component({
  // Se muestra en la ruta /pasatiempos (ver app.routes.ts)
  selector: 'app-pasatiempos',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './pasatiempos.html',
  styleUrl: './pasatiempos.css',
})
export class Pasatiempos {
  private formBuilder = inject(FormBuilder);

  // PASO 1 (Modelo dinamico): el formulario tiene un FormArray "pasatiempos"
  // que empieza con UN solo control vacio.
  // formBuilder.control('') es lo mismo que new FormControl('').
  pasatiemposForm = this.formBuilder.group({
    pasatiempos: this.formBuilder.array([this.formBuilder.control('')]),
  });

  // PASO 2 (a): GETTER. Se usa como una propiedad (this.pasatiempos, sin parentesis)
  // pero ejecuta codigo. get('pasatiempos') devuelve un AbstractControl generico;
  // con "as FormArray" le decimos a TypeScript que es un FormArray,
  // asi podemos usar .push(), .removeAt() y .controls.
  get pasatiempos() {
    return this.pasatiemposForm.get('pasatiempos') as FormArray;
  }

  // PASO 2 (b): agrega un control vacio al final del FormArray.
  // Angular dibuja automaticamente un input nuevo en el HTML (por el @for).
  agregarPasatiempo() {
    this.pasatiempos.push(this.formBuilder.control(''));
  }

  // EXTRA: quita el control de la posicion indicada.
  eliminarPasatiempo(indice: number) {
    this.pasatiempos.removeAt(indice);
  }

  onSubmit() {
    // El valor de un FormArray es un array: { pasatiempos: ['leer', 'correr', ...] }
    console.log(this.pasatiemposForm.value);
  }
}
