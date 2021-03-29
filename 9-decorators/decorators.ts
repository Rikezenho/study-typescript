// @logarClasse
// @logarClasseSe(true)
// @decorator({ a: 'Teste', b: 123 })
@decorator({ a: 'Teste' })
class Eletrodomestico {
    constructor() {
        console.log('novo...')
    }
}

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