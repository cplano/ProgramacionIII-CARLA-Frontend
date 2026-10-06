import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

// Tests del componente raíz (se ejecutan con "ng test")
describe('App', () => {
  // Antes de cada test, se configura un módulo de prueba con App
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      // App usa <router-outlet> y el Header usa routerLink: necesitan el router
      providers: [provideRouter([])],
    }).compileComponents();
  });

  // Verifica que el componente se pueda crear
  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Verifica que se muestre el título del Header dentro de la app
  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Sistema de Gestión');
  });
});
