// MODELO: representa los datos que el frontend ENVIA a la API en el login.
// Tiene que coincidir con el LoginDTO del backend (C#):
//   public class LoginDTO { public string Email; public string Password; }
// En TypeScript se usa una "interface": describe la forma que debe tener un objeto
// (que propiedades y de que tipo), sin codigo adentro.
export interface LoginModel {
  email: string;
  password: string;
}
