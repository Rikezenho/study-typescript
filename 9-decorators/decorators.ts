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

// ==== desafio perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}

// @perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}

new MudancaAdministrativa().critico()