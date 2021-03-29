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
@logarObjeto
class Eletrodomestico {
    constructor() {
        console.log('novo...')
    }
}

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

new Eletrodomestico()