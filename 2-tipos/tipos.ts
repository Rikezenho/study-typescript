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