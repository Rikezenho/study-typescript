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

function normalComThis() {
    console.log(this)
}
normalComThis()

const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' })
normalComThisEspecial()

// quem é o this aqui? é o window!
const arrowComThis = () => console.log(this)
arrowComThis()

const arrowComThisEspecial = arrowComThis.bind({ nome: 'Ana' })
arrowComThisEspecial()