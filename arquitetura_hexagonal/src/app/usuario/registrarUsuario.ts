import Usuario from "@/core/usuario/model/Usuario";
import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import InverterSenhaCripto from "@/adapter/auth/InverterSenhaCripto";
import EspacoSenhaCripto from "@/adapter/auth/EspacoSenhaCripto";
import SenhaCripto from "@/adapter/auth/SenhaCripto";

export default async function registrarUsuario() {
	TerminalUtil.titulo("Registrar Usuário")

	const nome = await TerminalUtil.campoRequerido('Nome: ', 'Carlos S.')
	const email = await TerminalUtil.campoRequerido('Email: ', 'carlos@empresa.com')
	const senha = await TerminalUtil.campoRequerido('Senha: ', '123123')

	const usuario: Usuario = { nome, email, senha }
	const provedorCripto = new SenhaCripto() 
	//const provedorCripto = new EspacoSenhaCripto() 
	//const provedorCripto = new InverterSenhaCripto() 
	const casoDeUso = new RegistrarUsuario(provedorCripto)

	await casoDeUso.executar(usuario)

	TerminalUtil.sucesso('Usuário registrado com sucesso!')
	await TerminalUtil.esperarEnter()

	try {
		await casoDeUso.executar(usuario)
	} catch (e: any) {
		TerminalUtil.erro(e.message)
	} finally {
		await TerminalUtil.esperarEnter()
	}
}
