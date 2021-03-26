let canal: string = 'Gaveta'
let inscritos: number = 534234

// canal = inscritos
console.log(`Canal = ${canal}`)

;(() => {
    // nome já existe no mesmo blockscope
    let nome: string = 'Pedro'
    console.log(`Nome = ${nome}`)
})();

// sourcemap test
;(() => {
    throw new Error('sadasdasd')
})();

// noImplicitAny
function soma(a: any, b: any) {
    return a + b
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'

// strictNullChecks, noUnusedParameters e noUnusedLocals
function saudar(
    isManha: boolean,
    // horas: number,
): string {
    // let a = 1
    let saudacao: string
    if (isManha) {
        saudacao = 'Bom dia!'
    } else {
        saudacao = 'Tenha uma boa vida'
    }
    return saudacao
}