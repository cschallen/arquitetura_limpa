import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import RepositorioUsuarioPg from './external/db/RepositorioUsuarioPg'
import SenhaCripto from './external/auth/SenhaCripto'
import RegistrarUsuario from './core/usuario/service/RegistrarUsuario'
import RegistrarUsuarioController from './external/api/RegistrarUsuarioController'
import LoginUsuario from './core/usuario/service/LoginUsuario'
import LoginUsuarioController from './external/api/LoginUsuarioController'
import UsuarioMiddleware from './external/api/UsuarioMiddleware'
import RepositorioProdutoPg from './external/db/RepositorioProdutoPg'
import RegistrarProduto from './core/produto/service/RegistrarProduto'
import RegistrarProdutoController from './external/api/RegistrarProdutoController'
import ObterProdutoPorNome from './core/produto/service/ObterProdutoPorNome'
import ObterProdutoPorNomeController from './external/api/ObterProdutoPorNomeController'

const app = express()
const porta = process.env.API_PORT ?? 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(porta, () => {
	console.log(`🔥 Servidor executando na porta ${porta}`);
})

// ---------- Rotas abertas

const repositorioUsuario = new RepositorioUsuarioPg()
const provedorCripto = new SenhaCripto()
const registrarUsuario = new RegistrarUsuario(repositorioUsuario, provedorCripto);

const loginUsuario = new LoginUsuario(repositorioUsuario, provedorCripto)

new RegistrarUsuarioController(app, registrarUsuario)
new LoginUsuarioController(app, loginUsuario)

// ---------- Rotas protegidas
const usuarioMiddleware = UsuarioMiddleware(repositorioUsuario)
const repositorioProduto = new RepositorioProdutoPg()

const registrarProduto = new RegistrarProduto(repositorioProduto)
const obterProdutoPorNome = new ObterProdutoPorNome(repositorioProduto)
new ObterProdutoPorNomeController(app, obterProdutoPorNome, usuarioMiddleware)
new RegistrarProdutoController(app, registrarProduto, usuarioMiddleware)
