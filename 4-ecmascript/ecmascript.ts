// let & const
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