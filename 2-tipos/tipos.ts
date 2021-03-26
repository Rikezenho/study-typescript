// ==== string
let nome: string = 'João'
console.log(nome)
// nome = 28

// ==== numbers
let idade: number = 27
// idade = 'Ana'
idade = 27.5
console.log(idade)

// ==== boolean
let possuiHobbies: boolean = false
possuiHobbies = true
// possuiHobbies = 1
console.log(possuiHobbies)

// ==== tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27'
// console.log(typeof minhaIdade)

// ==== array
let hobbies: any[] = ["cozinhar", "praticar esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 8, 19]
// hobbies = 100
console.log(hobbies)

// ==== tuplas
let endereco: [string, number, string] = ['av principal', 99, '']
console.log(endereco)

endereco = ['rua importante', 1260, 'bloco 2']
console.log(endereco)

// ==== enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 100
    Azul = 2, // 2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja)
console.log(Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// ==== any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// ==== funções
function retornaMeuNome(): string {
    // return minhaIdade
    return nome
}
console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
    // return minhaIdade
}
digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(2, 3.7))

// ==== funções como tipos
let calculo: (x: number, y: number) => number
// calculo = digaOi
// calculo()
calculo = multiplicar
console.log(calculo(5, 6))

// ==== objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27,
}
console.log(usuario)

// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 31
// }

usuario = {
    idade: 31,
    nome: 'Maria',
}
console.log(usuario)

/**
 * ==== Desafio
 * Criar um objeto funcionário com:
 * - Array de strings com os nomes dos supervisores
 * - Função de bater ponto que recebe a hora (número) e retorna uma string
 * -> Ponto normal (<= 8)
 * -> Fora do horário (> 8)
 */

type Funcionario = {
    supervisores: string[],
    baterPonto: (hora: number) => string,
}

let funcionario: Funcionario

funcionario = {
    supervisores: ['João', 'Pedro'],
    baterPonto(hora: number): string {
        if (hora <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do horário'
    }
}

// ==== union types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)
// nota = true
// console.log(`Minha nota é ${nota}!`)

// ==== tipo "never"
function falha(msg: string): never {
    // while (true) {

    // }
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 8,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('precisa ter nome')
        }
        if (this.preco <= 0) {
            falha('preco invalido!')
        }
    }
}

produto.validarProduto()