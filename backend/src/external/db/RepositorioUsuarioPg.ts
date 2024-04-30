import Usuario from "@/core/usuario/model/Usuario"
import db from "./db"
import RepositorioUsuario from "@/core/usuario/service/RepositorioUsuario"

export default class RepositorioUsuarioPg implements RepositorioUsuario {
	async inserir(usuario: Usuario) {
		await db.query(
			`insert into usuarios
				(id, nome, email, senha)
				values ($1, $2, $3, $4)`,
				[
					usuario.id,
					usuario.nome,
					usuario.email,
					usuario.senha
				]
		)
	}

	async buscaPorEmail(email: string): Promise<Usuario | null> {
		const usuario = await db.oneOrNone(
			"select * from usuarios where email = $1",
			[email]
		)
		if(!usuario) return null
		return usuario
	}
}
