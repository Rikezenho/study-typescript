"use strict";
// ==== string
let nome = 'João';
console.log(nome);
// nome = 28
// ==== numbers
let idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
// ==== boolean
let possuiHobbies = false;
possuiHobbies = true;
// possuiHobbies = 1
console.log(possuiHobbies);
// ==== tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27'
// console.log(typeof minhaIdade)
// ==== array
let hobbies = ["cozinhar", "praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 8, 19];
// hobbies = 100
console.log(hobbies);
// ==== tuplas
let endereco = ['av principal', 99, ''];
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
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja);
console.log(Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// ==== any
let carro = 'BMW';
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
let calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
// ==== objetos
let usuario = {
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
let funcionario;
funcionario = {
    supervisores: ['João', 'Pedro'],
    baterPonto(hora) {
        if (hora <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do horário';
    }
};
// ==== union types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
// nota = true
// console.log(`Minha nota é ${nota}!`)
// ==== tipo "never"
function falha(msg) {
    // while (true) {
    // }
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 8,
    validarProduto() {
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
let altura = 12;
// altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '99999990',
    tel2: null
};
let podeSerNulo = null; // infere any
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map