import ObterProdutoPorNome from "@/core/produto/service/ObterProdutoPorNome"
import { Express } from "express"

export default class ObterProdutoPorNomeController {
	constructor(
		servidor: Express, casoDeUso: ObterProdutoPorNome, ...middlewares: any[]
	) {
		servidor.get('/api/produtos/:nome', ...middlewares, async (req, resp) => {
			try {
				const produto = await casoDeUso.executar((req.params as any).nome)

				resp.status(200).send(produto)
			} catch (erro: any) {
				resp.status(400).send(erro.message)
			}
		})
	}
}
