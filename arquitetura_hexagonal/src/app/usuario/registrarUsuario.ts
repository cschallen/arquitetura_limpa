import Usuario from "@/core/usuario/model/Usuario";
import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import SenhaCripto from "@/adapter/auth/SenhaCripto";
import RepositorioUsuarioPg from "@/adapter/db/RepositorioUsuarioPg";

export default async function registrarUsuario() {
	const { campoRequerido, titulo, sucesso, erro, esperarEnter } = TerminalUtil

	titulo("Registrar Usuário")
	const nome = await campoRequerido('Nome: ', 'Carlos S.')
	const email = await campoRequerido('Email: ', 'carlos@empresa.com')
	const senha = await campoRequerido('Senha: ', '123123')
	const usuario: Usuario = { nome, email, senha }

	try {
		const repositorio = new RepositorioUsuarioPg()
		const provedorCripto = new SenhaCripto()
		const casoDeUso = new RegistrarUsuario(repositorio, provedorCripto)

		await casoDeUso.executar(usuario)

		sucesso('Usuário registrado com sucesso!')
	} catch (e: any) {
		erro(e.message)
	} finally {
		await esperarEnter()
	}
}
