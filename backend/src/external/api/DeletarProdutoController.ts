import { Express } from "express"
import RegistrarProduto from "@/core/produto/service/RegistrarProduto";
import ProvedorJwt from "./ProvedorJwt";
import Usuario from "@/core/usuario/model/Usuario";
import DeletarProduto from "@/core/produto/service/DeletarProduto";

export default class DeletarProdutoController {
	constructor(
		servidor: Express, casoDeUso: DeletarProduto, ...middlewares: any[]
	) {
  servidor.delete('/api/produtos/:id', ...middlewares, async (req, resp) => {
  	try {
////		const provedorJwt = new ProvedorJwt(process.env.JWT_SECRET!)
////		const token = req.headers.authorization?.replace('Bearer ', '')
////		const usuarioToken = provedorJwt.obter(token!) as Usuario
////		const usuarioEmail = usuarioToken.email

    		await casoDeUso.executar(req.params.id)
    		resp.status(201).send()
    	} catch (erro: any) {
    		resp.status(400).send(erro.message)
      }
    })
	}
}
