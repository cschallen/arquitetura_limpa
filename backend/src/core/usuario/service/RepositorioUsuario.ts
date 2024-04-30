import Usuario from "../model/Usuario";

export default interface RepositorioUsuario {
	inserir(usuario: Usuario): Promise<void>
	buscaPorEmail(email: string): Promise<Usuario | null>
	//buscaSenhaPorEmail(emai: string): Promise<string>
}
