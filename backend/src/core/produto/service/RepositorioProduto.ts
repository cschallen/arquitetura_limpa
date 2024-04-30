import Produto from "../model/Produto"

export default interface RepositorioProduto {
	inserir(produto: Produto): Promise<void>
	buscaPorId(id: string): Promise<Produto | null>
}
