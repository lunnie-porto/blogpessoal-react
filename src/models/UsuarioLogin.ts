export default interface UsuarioLogin {
  id: number;
  nome: string;
  usuario: string;
  senha?: string; // Dica: se quiser deixar opcional aqui também por segurança, pode! Mas o exemplo original funciona perfeitamente.
  foto: string;
  token: string;
}