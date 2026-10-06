// MODELO: representa lo que la API DEVUELVE cuando el login sale bien.
// Coincide con LoginResponseDTO y UserResponseDTO del backend.
// (En C# las propiedades empiezan con mayuscula, pero ASP.NET las envia
// en el JSON en minuscula: Token -> token, User -> user.)

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
  token: string;            // Token JWT
  user: UserResponseModel;
}
