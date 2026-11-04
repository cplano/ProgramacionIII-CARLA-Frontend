import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  // Se muestra en la ruta /pasatiempos (ver app.routes.ts)
  selector: 'app-pasatiempos',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './pasatiempos.html',
  styleUrl: './pasatiempos.css',
})
export class Pasatiempos {
  private formBuilder = inject(FormBuilder);

  pasatiemposForm = this.formBuilder.group({
    pasatiempos: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get pasatiempos() {
    return this.pasatiemposForm.get('pasatiempos') as FormArray;
  }

  agregarPasatiempo() {
    this.pasatiempos.push(this.formBuilder.control(''));
  }

  // EXTRA: quita el control de la posicion indicada.
  eliminarPasatiempo(indice: number) {
    this.pasatiempos.removeAt(indice);
  }

  onSubmit() {
    console.log(this.pasatiemposForm.value);
  }
}
