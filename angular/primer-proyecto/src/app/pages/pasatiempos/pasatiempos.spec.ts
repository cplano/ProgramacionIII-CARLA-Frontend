import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasatiempos } from './pasatiempos';

// Tests del Ejercicio 2 (se ejecutan con "ng test")
describe('Pasatiempos', () => {
  let component: Pasatiempos;
  let fixture: ComponentFixture<Pasatiempos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pasatiempos],
    }).compileComponents();

    fixture = TestBed.createComponent(Pasatiempos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('empieza con un solo campo', () => {
    expect(component.pasatiempos.length).toBe(1);
  });

  // Simula 2 clics en "+ Agregar pasatiempo": el FormArray crece y el HTML dibuja inputs nuevos.
  // (Se hace clic en el boton, como el usuario: en Angular 22 la pantalla se
  // actualiza sola cuando el cambio viene de un evento del HTML.)
  it('el boton agregar suma un campo en el formulario y en la pantalla', async () => {
    const html = fixture.nativeElement as HTMLElement;
    const botonAgregar = html.querySelector('button[type="button"]') as HTMLButtonElement;

    botonAgregar.click();
    botonAgregar.click();
    await fixture.whenStable();

    expect(component.pasatiempos.length).toBe(3);
    expect(html.querySelectorAll('input').length).toBe(3);
  });

  // Escribir en un input actualiza el control de esa posicion (formControlName="{{i}}")
  it('cada input esta conectado con su posicion del FormArray', async () => {
    const input = (fixture.nativeElement as HTMLElement).querySelector('#pasatiempo-0') as HTMLInputElement;
    input.value = 'leer';
    input.dispatchEvent(new Event('input')); // simula que el usuario escribio
    expect(component.pasatiempos.at(0).value).toBe('leer');
  });

  it('el valor del formulario es un array con los pasatiempos', () => {
    component.agregarPasatiempo();
    component.pasatiempos.setValue(['leer', 'correr']);
    expect(component.pasatiemposForm.value).toEqual({ pasatiempos: ['leer', 'correr'] });
  });
});
