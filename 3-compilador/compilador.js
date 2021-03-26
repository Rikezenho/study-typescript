"use strict";
var canal = 'Gaveta';
var inscritos = 534234;
// canal = inscritos
console.log("Canal = " + canal);
(function () {
    // nome já existe no mesmo blockscope
    var nome = 'Pedro';
    console.log("Nome = " + nome);
})();
// sourcemap test
;
(function () {
    throw new Error('sadasdasd');
})();
// noImplicitAny
function soma(a, b) {
    return a + b;
}
var qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
// strictNullChecks, noUnusedParameters e noUnusedLocals
function saudar(isManha) {
    // let a = 1
    var saudacao;
    if (isManha) {
        saudacao = 'Bom dia!';
    }
    else {
        saudacao = 'Tenha uma boa vida';
    }
    return saudacao;
}
//# sourceMappingURL=compilador.js.map