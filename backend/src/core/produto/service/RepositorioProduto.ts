import Produto from "../model/Produto"

export default interface RepositorioProduto {
	inserir(produto: Produto): Promise<void>
	buscaPorNome(nome: string): Promise<Produto | null>
}
