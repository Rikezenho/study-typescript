"use strict";
let canal = 'Gaveta';
let inscritos = 534234;
// canal = inscritos
console.log(`Canal = ${canal}`);
(() => {
    // nome já existe no mesmo blockscope
    let nome = 'Pedro';
    console.log(`Nome = ${nome}`);
})();
// sourcemap test
;
(() => {
    throw new Error('sadasdasd');
})();
// noImplicitAny
function soma(a, b) {
    return a + b;
}
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
// strictNullChecks, noUnusedParameters e noUnusedLocals
function saudar(isManha) {
    // let a = 1
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia!';
    }
    else {
        saudacao = 'Tenha uma boa vida';
    }
    return saudacao;
}
//# sourceMappingURL=compilador.js.map