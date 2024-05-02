import CasoDeUso from "@/core/shared/CasoDeUso";
import Erros from "@/core/shared/Erros";
import RepositorioProduto from "./RepositorioProduto";

export default class DeletarProduto implements CasoDeUso<string, void> {

	constructor(
		private repositorio: RepositorioProduto,
	) {}

	async executar(id: string): Promise<any> {
		const produtoExistente = await this.repositorio.buscaPorId(id)

		if(!produtoExistente) throw new Error(Erros.PRODUTO_INEXISTENTE)

		this.repositorio.remover(produtoExistente.id!)
		console.log(`\n\nRemovendo... \n${JSON.stringify(produtoExistente)}`)
	}
}
