// Datos publicos del usuario (sin la contraseña)
export interface UserResponseModel {
  id: number;
  fullname: string;
  dni: string;
  email: string;
  username: string;
}

// Respuesta completa del login
export interface LoginResponseModel {
  token: string;
  user: UserResponseModel;
}
