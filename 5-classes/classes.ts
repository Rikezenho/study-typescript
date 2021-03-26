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

class Carro {
    private velocidadeAtual: number = 0

    constructor(
        public marca: string,
        public modelo:string,
        private velocidadeMaxima: number = 200
    ) {

    }

    private alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima
        
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', 'Ka', 185)
Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())
Array(20).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

// vai permitir mexer em atributos e método privados
// pois o JS gerado não possui distinção de public e private
// carro1.velocidadeAtual = 300
// console.log('atual ->', carro1.velocidadeAtual)

// carro1.velocidadeMaxima = 500
// console.log('maxima ->', carro1.velocidadeMaxima)

// carro1.alterarVelocidade(150)
// console.log('atual ->', carro1.velocidadeAtual)