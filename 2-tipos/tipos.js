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
