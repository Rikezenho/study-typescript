"use strict";
// ==== string
var nome = 'João';
console.log(nome);
// nome = 28
// ==== numbers
var idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
// ==== boolean
var possuiHobbies = false;
possuiHobbies = true;
// possuiHobbies = 1
console.log(possuiHobbies);
// ==== tipos explícitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27'
// console.log(typeof minhaIdade)
// ==== array
var hobbies = ["cozinhar", "praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 8, 19];
// hobbies = 100
console.log(hobbies);
// ==== tuplas
var endereco = ['av principal', 99, ''];
console.log(endereco);
endereco = ['rua importante', 1260, 'bloco 2'];
console.log(endereco);
// ==== enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja);
console.log(Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// ==== any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// ==== funções
function retornaMeuNome() {
    // return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(2, 3.7));
// ==== funções como tipos
var calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
// ==== objetos
var usuario = {
    nome: 'João',
    idade: 27,
};
console.log(usuario);
// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 31
// }
usuario = {
    idade: 31,
    nome: 'Maria',
};
console.log(usuario);
var funcionario;
funcionario = {
    supervisores: ['João', 'Pedro'],
    baterPonto: function (hora) {
        if (hora <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do horário';
    }
};
// ==== union types
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
nota = '10';
console.log("Minha nota \u00E9 " + nota + "!");
// nota = true
// console.log(`Minha nota é ${nota}!`)
// ==== tipo "never"
function falha(msg) {
    // while (true) {
    // }
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 8,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('precisa ter nome');
        }
        if (this.preco <= 0) {
            falha('preco invalido!');
        }
    }
};
produto.validarProduto();
// ==== null
var altura = 12;
// altura = null
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '99999990',
    tel2: null
};
var podeSerNulo = null; // infere any
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
