import type Postagem from "./Postagem";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string; // Guarda o email/login
  foto: string;
  senha?: string;   // O ponto de interrogação (?) torna a senha opcional no frontend
  postagem?: Postagem[] | null;
}