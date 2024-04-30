import CasoDeUso from "@/core/shared/CasoDeUso";
import Produto from "../model/Produto";
import RepositorioProduto from "./RepositorioProduto";
import Erros from "@/core/shared/Erros";

export type Entrada = {
	produtoId: string
}

export default class ObterProdutoPorId implements CasoDeUso<Entrada, Produto> {
	constructor(
		private repositorioProduto: RepositorioProduto
	){}

	async executar(entrada: Entrada): Promise<Produto> {
		const produto = await this.repositorioProduto.buscaPorId(entrada.produtoId)
		if (!produto) throw Error(Erros.PRODUTO_INEXISTENTE)

		return produto
	}
}
