import Produto from "../model/Produto"

export default interface RepositorioProduto {
	inserir(produto: Produto): Promise<void>
	remover(id: string): Promise<void>
	buscaPorNome(nome: string): Promise<Produto | null>
	buscaPorId(id: string): Promise<Produto | null>
}
