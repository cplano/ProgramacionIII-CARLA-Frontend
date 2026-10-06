import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
// HttpTestingController: simula la API para poder probar SIN que este ejecutandose
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { Login } from './login';

// Tests del componente Login (se ejecutan con "ng test")
describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
      // provideHttpClientTesting reemplaza las llamadas reales por llamadas simuladas
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Si el formulario esta vacio, no se tiene que hacer ningun pedido a la API
  it('no envia el pedido si el formulario es invalido', () => {
    component.login();
    httpMock.expectNone('http://localhost:5006/api/User/login');
  });

  // Simula que la API responde 401 y verifica que se muestre el mensaje de error
  it('muestra un mensaje si las credenciales son incorrectas', () => {
    component.loginForm.setValue({ email: 'carla@email.com', password: 'mala' });
    component.login();

    const req = httpMock.expectOne('http://localhost:5006/api/User/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ email: 'carla@email.com', password: 'mala' });
    req.flush('Email o contraseña incorrectos.', { status: 401, statusText: 'Unauthorized' });

    expect(component.mensajeError()).toBe('Email o contraseña incorrectos.');
    expect(component.token()).toBeNull();
  });

  // Simula que la API responde 200 con un token y verifica que se guarde
  it('guarda el token si el login es correcto', () => {
    component.loginForm.setValue({ email: 'carla@email.com', password: '123456' });
    component.login();

    const req = httpMock.expectOne('http://localhost:5006/api/User/login');
    req.flush({
      token: 'token-de-prueba',
      user: { id: 1, fullname: 'Carla Plano', dni: '1', email: 'carla@email.com', username: 'cplano' },
    });

    expect(component.token()).toBe('token-de-prueba');
    expect(component.usuario()).toBe('Carla Plano');
    expect(component.mensajeError()).toBeNull();
  });
});
