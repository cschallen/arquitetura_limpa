import {terminal} from 'terminal-kit'

export default class TerminalUtil {
    static async menu(opcoes: string[]): Promise<[number, string]> {
        const resposta = await terminal.singleColumnMenu(opcoes).promise
        return [resposta.selectedIndex, resposta.selectedText]
    }

    static titulo(texto: string) {
        terminal.clear()
        terminal.magenta(`${texto}\n`)
        terminal.magenta(`-`.repeat(texto.length) + `\n`)
    }

    static exibirVelocidadeAtual(velocidadeAtual: number) {
        terminal.red(`\nVelocidade: ${velocidadeAtual}`)
    }

    static limpar() {
        terminal.clear()
    }

    static exibirChaveValor(chave: string, valor: any) {
        terminal.yellow(chave).green(valor).white('\n')
    }

    static async selecao(texto: string, opcoes: string[]): Promise<[number, string]> {
        terminal.yellow(`\n${texto}`)
        const resposta = await terminal.singleLineMenu(opcoes).promise
        return [resposta.selectedIndex, resposta.selectedText]
    }

    static async confirmacao(texto: string): Promise<boolean> {
        terminal.yellow(`\n${texto}`)
        const resposta = await terminal.singleLineMenu(['Sim', 'Não']).promise
        return resposta.selectedIndex === 0
    }

    static async esperarEnter(): Promise<void> {
        terminal.white('\n Pressione ENTER para continuar...')
        await terminal.inputField({echo: false}).promise
    }
}
