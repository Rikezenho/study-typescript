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
//# sourceMappingURL=compilador.js.map