import { Express } from "express"
import RegistrarProduto from "@/core/produto/service/RegistrarProduto";
import ProvedorJwt from "./ProvedorJwt";
import Usuario from "@/core/usuario/model/Usuario";

export default class RegistrarProdutoController {
	constructor(
		servidor: Express, casoDeUso: RegistrarProduto, ...middlewares: any[]
	) {
		servidor.post('/api/produtos/registrar', ...middlewares, async (req, resp) => {
			try {
				const provedorJwt = new ProvedorJwt(process.env.JWT_SECRET!)
				const token = req.headers.authorization?.replace('Bearer ', '')
				const usuarioToken = provedorJwt.obter(token!) as Usuario
				const usuarioEmail = usuarioToken.email

				await casoDeUso.executar({
					nome: req.body.nome,
					preco: req.body.preco,
					criadoPor: usuarioEmail
				})
				resp.status(201).send()
			} catch (erro: any) {
				resp.status(400).send(erro.message)
			}
		})
	}
}
