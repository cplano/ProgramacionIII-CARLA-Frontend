import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/LoginModel';
import { LoginResponseModel } from '../models/LoginResponseModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly API_URL = 'http://localhost:5006/api';

  constructor(private http: HttpClient) {}

  login(login: LoginModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(`${this.API_URL}/User/login`, login);
  }
}
