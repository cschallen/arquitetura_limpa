import TerminalUtil from '@/app/util/TerminalUtil'
import menuFundamentos from './menuFundamentos'

export default async function menuPrincipal() {
    TerminalUtil.titulo('Menu Principal')

    const [index] = await TerminalUtil.menu([
        '1. Fundamentos',
        'Sair'
    ])

    switch (index) {
        case 0: await menuFundamentos(); break
        case 1: process.exit(0)
    }

    menuPrincipal()
}
