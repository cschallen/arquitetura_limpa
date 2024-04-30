import CasoDeUso from "@/core/shared/CasoDeUso";
import Erros from "@/core/shared/Erros";
import Produto from "../model/Produto";
import RepositorioProduto from "./RepositorioProduto";
import Id from "@/core/shared/Id";

export default class RegistrarProduto implements CasoDeUso<Produto, void> {

	constructor(
		private repositorio: RepositorioProduto,
	) {}

	async executar(produto: Produto): Promise<any> {
		const produtoExistente = await this.repositorio.buscaPorNome(produto.nome)

		if(produtoExistente) throw new Error(Erros.PRODUTO_JA_EXISTE)
		const novoProduto: Produto = {
			id: Id.gerarHash(),
			nome: produto.nome,
			preco: produto.preco
		}

		this.repositorio.inserir(novoProduto)
		console.log(`\n\n${JSON.stringify(produto)}`)
	}
}
