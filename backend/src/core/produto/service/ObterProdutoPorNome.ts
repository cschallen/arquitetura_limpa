import CasoDeUso from "@/core/shared/CasoDeUso";
import Produto from "../model/Produto";
import RepositorioProduto from "./RepositorioProduto";
import Erros from "@/core/shared/Erros";

export default class ObterProdutoPorNome implements CasoDeUso<string, Produto> {
	constructor(
		private repositorioProduto: RepositorioProduto
	){}

	async executar(nome: string): Promise<Produto> {
		const produto = await this.repositorioProduto.buscaPorNome(nome)
		if (!produto) throw Error(Erros.PRODUTO_INEXISTENTE)

		return produto
	}
}
