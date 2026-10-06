import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/LoginModel';
import { LoginResponseModel } from '../models/LoginResponseModel';

// SERVICIO: clase que centraliza logica que NO pertenece a la pantalla.
// Este se encarga de COMUNICARSE CON LA API. El componente Login no sabe
// la URL ni como se hace el pedido: solo llama a userService.login(...).

// @Injectable: permite que Angular "inyecte" este servicio en los componentes.
// providedIn: 'root' = hay una sola instancia para toda la app.
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // URL base de la API (.NET). El puerto 5006 es el del perfil "http" de launchSettings.json.
  // "readonly" = no se puede modificar.
  readonly API_URL = 'http://localhost:5006/api';

  // INYECCION DE DEPENDENCIAS: Angular pasa el HttpClient en el constructor.
  // "private http" crea automaticamente la propiedad this.http.
  constructor(private http: HttpClient) {}

  // Hace el POST /api/User/login enviando { email, password } en formato JSON.
  // post<LoginResponseModel>: indica el tipo de dato que se espera de respuesta.
  // Devuelve un Observable: el pedido NO se envia hasta que alguien hace .subscribe().
  login(login: LoginModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(`${this.API_URL}/User/login`, login);
  }
}
