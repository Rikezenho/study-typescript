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
function retornarArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
var numeros = retornarArray(1, 2, 3, 4, 5, 6);
console.log(numeros);
//# sourceMappingURL=ecmascript.js.map