interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
}

function saudarComOla(pessoa: Humano): void {
    console.log('Olá', pessoa.nome)
}

function mudarNome(pessoa: Humano): void {
    pessoa.nome = 'Joana'
}

const pessoa = {
    nome: 'João',
    idade: 27
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.75 })