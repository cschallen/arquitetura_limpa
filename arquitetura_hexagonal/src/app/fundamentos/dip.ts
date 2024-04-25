import corrida from "@/core/fundamentos/corrida";
import TerminalUtil from "../util/TerminalUtil";
import Fusca from "@/core/fundamentos/Fusca";
import Ferrari from "@/core/fundamentos/Ferrari";
import Carro from "@/core/fundamentos/Carro";
import {terminal} from "terminal-kit";

export default async function dip() {
	TerminalUtil.titulo('DIP')
	const [tipo] = await TerminalUtil.selecao('Tipo de carro?', ['Fusca', 'Ferrari'])

	let carro: Carro 

	switch(tipo) {
		case 0:
			carro = new Fusca
			break
		default:
			carro = new Ferrari
			break
	}

	corrida(carro, terminal.yellow)
	await TerminalUtil.esperarEnter()
}
