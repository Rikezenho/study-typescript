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