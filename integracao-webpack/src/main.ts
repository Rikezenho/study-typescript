import $ from 'jquery'
import Livro from './modelo/livro'

const livro = new Livro('Harry Potter', 108.80, 0.1)
// console.log(livro.precoComDesconto())

$('body').append(`<h1>${livro.nome}</h1>`)
$('body').append(`<h2>Preço: ${livro.precoComDesconto()}</h2>`)