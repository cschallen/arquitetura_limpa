import RepositorioProduto from "@/core/produto/service/RepositorioProduto"
import db from "./db"
import Produto from "@/core/produto/model/Produto"

export default class RepositorioProdutoPg implements RepositorioProduto {
	async inserir(produto: Produto) {
		await db.query(
			`insert into produtos
				(id, nome, preco)
				values ($1, $2, $3)`,
				[
					produto.id,
					produto.nome,
					produto.preco
				]
		)
	}

	async buscaPorId(id: string): Promise<Produto | null> {
		const produto = await db.oneOrNone(
			"select * from produtos where id = $1",
			[id]
		)
		if(!produto) return null
		return produto
	}
}
