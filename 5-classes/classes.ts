class Data {
    // publico por padrão
    dia: number
    public mes: number
    ano: number 

    constructor(
        dia: number = 1,
        mes: number = 1,
        ano: number = 1970
    ) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }


}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data;
casamento.ano = 2017
console.log(casamento)


class DataEsperta {
    constructor(
        public dia: number = 1,
        public mes: number = 1,
        public ano: number = 1970
    ) {}
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta;
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)

/**
 * ==== Desafio Produto
 * Atributos: nome, preco e desconto
 * Criar o construtor
 * Obs 1: Desconto é opcional (valor padrão 0)
 * Obs 2: Criar dois produtos: passando dois e três parâmetros
 */

class Produto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0,
    ) {}

    private precoComDesconto(): number {
        const { preco, desconto } = this

        if (!desconto) return preco
        return preco - (preco * desconto)
    }

    private descontoFormatado(): string {
        const { desconto } = this

        if (!desconto) return '';
        return !!desconto ? `(${desconto * 100}% OFF)` : ''
    }

    public resumo(): string {
        return `${this.nome} - R$${this.precoComDesconto()} ${this.descontoFormatado()}`
    }
}

const produto1: Produto = new Produto(
    'Omo Multiação',
    20.00,
    0.20
)

const produto2: Produto = new Produto(
    'Vanish O2',
    12.00,
)

console.log(produto1.resumo())
console.log(produto2.resumo())