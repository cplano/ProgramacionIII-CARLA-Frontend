// ARCHIVO DE PRUEBAS (test) generado por Angular. Se ejecuta con "ng test", no forma parte de la pagina.
// beforeEach: antes de cada prueba crea el componente en un entorno de prueba (TestBed).
// it(...): una prueba. "should create" verifica que el componente se pueda crear sin errores.

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard } from './dashboard';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
