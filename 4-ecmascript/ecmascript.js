"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// ==== let & const
var seraQuePode = '?'; // hoisting, pq transpila pra var
console.log(seraQuePode);
var estaFrio = true;
if (estaFrio) {
    var acao = 'Colocar o casaco!';
    console.log(acao);
}
var cpf = '123.456.789-01';
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
        var def = 'def';
        console.log(def);
    }
}
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
// ==== arrow function
var somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
var subtrair = function (n1, n2) { return n1 - n2; };
console.log(subtrair(2, 3));
var saudacao = function () { return console.log('olá!'); };
saudacao();
var falarCom = function (pessoa) { return console.log("Ola " + pessoa); };
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
function contagemRegressiva(inicio, fim) {
    if (inicio === void 0) { inicio = 5; }
    if (fim === void 0) { fim = inicio - 5; }
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
var numbers = [1, 10, 99, -5];
console.log(Math.max.apply(Math, numbers));
var turmaA = ['João', 'Maria', 'Fernando'];
var turmaB = __spreadArray(['Fernando', 'Miguel', 'Lorena'], turmaA);
console.log(turmaB);
function retornarArray(a) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return __spreadArray([a], args);
}
var numeros = retornarArray(1, 2, 3, 4, 5, 6);
console.log(numeros);
console.log(retornarArray.apply(void 0, __spreadArray([numbers[0]], numbers)));
// ==== rest & spread (tupla)
var tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log("1) " + a + " " + b + " " + c);
}
tuplaParam1.apply(void 0, tupla);
function tuplaParam2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log(Array.isArray(params));
    console.log("2) " + params[0] + " " + params[1] + " " + params[2]);
}
tuplaParam2.apply(void 0, tupla);
// ==== destructuring (array)
var caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
var motor = caracteristicas[0], ano = caracteristicas[1];
console.log(motor, ano);
// ==== destructuring (objeto)
var item = {
    nome: 'SSD 480GB',
    preco: 200,
};
var nomeItem = item.nome;
var precoItem = item.preco;
var n = item.nome, p = item.preco;
console.log(n, p);
console.log(nomeItem, precoItem);
var usuarioID = 'suportecod3r';
var notificacoes = '9';
var boasVindas = "Boas vindas " + usuarioID + " - " + notificacoes + " notifica\u00E7\u00F5es";
console.log(boasVindas);
// ==== exercicios
// 1) Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
{
    var dobro = function (valor) {
        return valor * 2;
    };
    console.log(dobro(10));
}
// 2) Verifique se há espaço para melhorias nesse trecho de código!
{
    var dizerOla = function (nome) {
        if (nome === void 0) { nome = 'Pessoa'; }
        console.log("Ola, " + nome);
    };
    dizerOla();
    dizerOla("Anna");
}
// 3) Dado esse array, imprima o menor valor!
{
    var nums = [-3, 33, 38, 5];
    console.log(Math.min.apply(Math, nums));
}
// 4) Adicione os elementos de nums em array !
{
    var nums = [-3, 33, 38, 5];
    var array = __spreadArray([55, 20], nums);
    console.log(array);
}
// 5) Simplifique os trechos de código abaixo utilizando o operador Destructuring!
{
    var _a = [8.5, 6.3, 9.4], nota1 = _a[0], nota2 = _a[1], nota3 = _a[2];
    console.log(nota1, nota2, nota3);
}
{
    var _b = { primeiroNome: "Will", experiencia: 12 }, primeiroNome = _b.primeiroNome, experiencia = _b.experiencia;
    console.log(primeiroNome, experiencia);
}
//# sourceMappingURL=ecmascript.js.map