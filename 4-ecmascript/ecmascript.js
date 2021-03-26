"use strict";
// ==== let & const
let seraQuePode = '?'; // hoisting, pq transpila pra var
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}
const cpf = '123.456.789-01';
// cpf = '789.101.132-78'
console.log(cpf);
var segredo = 'externo!';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        const def = 'def';
        console.log(def);
    }
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
// ==== arrow function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log('olá!');
saudacao();
const falarCom = (pessoa) => console.log(`Ola ${pessoa}`);
falarCom('João');
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
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('fim!');
}
contagemRegressiva();
contagemRegressiva(3);
// ==== spread operator // rest
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'Fernando'];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);
function retornarArray(a, ...args) {
    return [a, ...args];
}
const numeros = retornarArray(1, 2, 3, 4, 5, 6);
console.log(numeros);
console.log(retornarArray(numbers[0], ...numbers));
// ==== rest & spread (tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// ==== destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor, ano);
// ==== destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
};
const nomeItem = item.nome;
const precoItem = item.preco;
const { nome: n, preco: p } = item;
console.log(n, p);
console.log(nomeItem, precoItem);
const usuarioID = 'suportecod3r';
const notificacoes = '9';
const boasVindas = `Boas vindas ${usuarioID} - ${notificacoes} notificações`;
console.log(boasVindas);
// ==== exercicios
// 1) Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
{
    const dobro = (valor) => valor * 2;
    console.log(dobro(10));
}
// 2) Verifique se há espaço para melhorias nesse trecho de código!
{
    const dizerOla = (nome = 'Pessoa') => {
        console.log(`Ola, ${nome}`);
    };
    dizerOla();
    dizerOla("Anna");
}
// 3) Dado esse array, imprima o menor valor!
{
    const nums = [-3, 33, 38, 5];
    console.log(Math.min(...nums));
}
// 4) Adicione os elementos de nums em array !
{
    const nums = [-3, 33, 38, 5];
    const array = [55, 20, ...nums];
    console.log(array);
}
// 5) Simplifique os trechos de código abaixo utilizando o operador Destructuring!
{
    const [nota1, nota2, nota3] = [8.5, 6.3, 9.4];
    console.log(nota1, nota2, nota3);
}
{
    const { primeiroNome, experiencia } = { primeiroNome: "Will", experiencia: 12 };
    console.log(primeiroNome, experiencia);
}
// ==== callback
function esperar3s(callback) {
    setTimeout(() => {
        callback('3 segundos depois...');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
function esperar3sPromise() {
    // aí precisa mudar o tsconfig para es6
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3 segundos depois...');
        }, 3000);
    });
}
esperar3sPromise()
    .then(dado => console.log(dado));
//# sourceMappingURL=ecmascript.js.map