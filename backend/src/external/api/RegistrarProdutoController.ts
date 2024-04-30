import { Express } from "express"
import RegistrarProduto from "@/core/produto/service/RegistrarProduto";

export default class RegistrarProdutoController {
	constructor(
		servidor: Express, casoDeUso: RegistrarProduto, ...middlewares: any[]
	) {
		servidor.post('/api/produtos/registrar', ...middlewares, async (req, resp) => {
			try {
				await casoDeUso.executar({
					nome: req.body.nome,
					preco: req.body.preco
				})
				resp.status(201).send()
			} catch (erro: any) {
				resp.status(400).send(erro.message)
			}
		})
	}
}
