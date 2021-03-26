// ==== let & const
let seraQuePode = '?' // hoisting, pq transpila pra var
console.log(seraQuePode)

let estaFrio = true
if (estaFrio) {
    let acao = 'Colocar o casaco!'
    console.log(acao)
}

const cpf: string = '123.456.789-01'
// cpf = '789.101.132-78'
console.log(cpf)

var segredo = 'externo!'
function revelar() {
    var segredo = 'interno'
    console.log(segredo)
}
revelar()
console.log(segredo)

{
    {
        const def = 'def'
        console.log(def)
    }
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}
// console.log(i)

// ==== arrow function
const somar = function(n1: number, n2:number): number {
    return n1 + n2
}
console.log(somar(2,2))

const subtrair = (n1: number, n2: number) => n1 - n2
console.log(subtrair(2, 3))

const saudacao = () => console.log('olá!')
saudacao()

const falarCom = (pessoa: string) => console.log(`Ola ${pessoa}`)
falarCom('João')

// ==== this

// function normalComThis() {
//     console.log(this)
// }
// normalComThis()

// const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' })
// normalComThisEspecial()

// // quem é o this aqui? é o window!
// const arrowComThis = () => console.log(this)
// arrowComThis()

// const arrowComThisEspecial = arrowComThis.bind({ nome: 'Ana' })
// arrowComThisEspecial()

// ==== valor padrão
function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5): void {
    console.log(inicio)
    while (inicio > fim) {
        inicio--
        console.log(inicio)
    }
    console.log('fim!')
}

contagemRegressiva()
contagemRegressiva(3)

// ==== spread operator // rest
const numbers = [1, 10, 99, -5]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Fernando']
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA]
console.log(turmaB)

function retornarArray(a: number, ...args: number[]): number[] {
    return [a, ...args]
}

const numeros = retornarArray(1, 2, 3, 4, 5, 6)
console.log(numeros)
console.log(retornarArray(numbers[0], ...numbers))

// ==== rest & spread (tupla)
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]): void {
    console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)