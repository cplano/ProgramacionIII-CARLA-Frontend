// ARCHIVO DE PRUEBAS (test) generado por Angular. Se ejecuta con "ng test", no forma parte de la pagina.
// beforeEach: antes de cada prueba crea el componente en un entorno de prueba (TestBed).
// it(...): una prueba. "should create" verifica que el componente se pueda crear sin errores.

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
