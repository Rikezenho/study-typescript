"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data;
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta;
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
/**
 * ==== Desafio Produto
 * Atributos: nome, preco e desconto
 * Criar o construtor
 * Obs 1: Desconto é opcional (valor padrão 0)
 * Obs 2: Criar dois produtos: passando dois e três parâmetros
 */
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        const { preco, desconto } = this;
        if (!desconto)
            return preco;
        return preco - (preco * desconto);
    }
    descontoFormatado() {
        const { desconto } = this;
        if (!desconto)
            return '';
        return !!desconto ? `(${desconto * 100}% OFF)` : '';
    }
    resumo() {
        return `${this.nome} - R$${this.precoComDesconto()} ${this.descontoFormatado()}`;
    }
}
const produto1 = new Produto('Omo Multiação', 20.00, 0.20);
const produto2 = new Produto('Vanish O2', 12.00);
console.log(produto1.resumo());
console.log(produto2.resumo());
//# sourceMappingURL=classes.js.map