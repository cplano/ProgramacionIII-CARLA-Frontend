import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Registro } from './registro';

// Tests del Ejercicio 1 (se ejecutan con "ng test")
describe('Registro', () => {
  let component: Registro;
  let fixture: ComponentFixture<Registro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registro],
    }).compileComponents();

    fixture = TestBed.createComponent(Registro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Validators.required: vacio = invalido, completo = valido
  it('es invalido sin nombre y email, y valido cuando se completan', () => {
    expect(component.registroForm.valid).toBe(false);
    component.registroForm.patchValue({ nombre: 'Carla', email: 'carla@email.com' });
    expect(component.registroForm.valid).toBe(true);
  });

  // patchValue solo cambia la direccion y no toca el nombre
  it('cargarDireccionDePrueba modifica solo calle y ciudad', () => {
    component.registroForm.patchValue({ nombre: 'Carla' });
    component.cargarDireccionDePrueba();

    expect(component.registroForm.value.nombre).toBe('Carla');
    expect(component.registroForm.value.direccion).toEqual({
      calle: 'Av. Roca 1757',
      ciudad: 'San Miguel de Tucumán',
    });
  });
});
