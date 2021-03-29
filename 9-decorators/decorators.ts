function logarClasse(construtor: Function) {
    console.log(construtor)
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio
}

function decorator(obj: { a: string, b?: number }) {
    return function(_: Function): void {
        console.log(`${obj.a} ${obj.b ? obj.b : ''}`)
    }
}

// @logarClasse
// @logarClasseSe(true)
// @decorator({ a: 'Teste', b: 123 })
// @decorator({ a: 'Teste' })
// @logarObjeto
// class Eletrodomestico {
//     constructor() {
//         console.log('novo...')
//     }
// }

type Construtor = { new(...args: any[]): {} }

function logarObjeto(construtor: Construtor) {
    console.log('Carregado...')
    return class extends construtor {
        constructor(...args: any[]) {
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    }
}

// new Eletrodomestico()

interface Eletrodomestico {
    imprimir?(): void
}
@logarObjeto
@imprimivel
class Eletrodomestico {
    constructor() {
        console.log('novo...')
    }
}

function imprimivel(construtor: Function) {
    construtor.prototype.imprimir = function () {
        console.log(this)
    }
}

const eletro = new Eletrodomestico()
    eletro.imprimir && eletro.imprimir()

interface Usuario {
    nome: string
    email: string
    admin: boolean
}

// ==== desafio perfilAdmin
const usuarioLogado: Usuario = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}

// function perfilAdmin(usuarioLogado: Usuario) {
//     return (_: Function) => {
//         if (!usuarioLogado || !usuarioLogado.admin) {
//             throw new Error('Usuário nao possui permissão de admin!')
//         }
//     }
// }

// @perfilAdmin(usuarioLogado)
// class MudancaAdministrativa {
//     critico() {
//         console.log('Algo crítico foi alterado!')
//     }
// }

// new MudancaAdministrativa().critico()

// solução do curso

function perfilAdmin<T extends Construtor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args)
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão!')
            }
        }
    }
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}