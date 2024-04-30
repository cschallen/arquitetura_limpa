
// Na arquitetura hexagonal esta interface é uma porta!
// A porta faz parte do core da aplicação
export default interface ProvedorCriptografia {
	criptografar(texto: string): string
	comparar(senha: string, senhaCriptografada: string): boolean
}
