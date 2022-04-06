//FIZZBUZZ
// divisível por 3 ==> fizz
// divisivel por 5 ==> buzz
// divisível por 3 e 5 fizzbuzz
// não divisível por 3 ou 5 ==> entrada
// não número ==> não número

const resultado = fizzbuzz('s1')
console.log(resultado)

function fizzbuzz(entrada){
if(typeof entrada !== 'number')
    return 'não é um NUMERO'
if(entrada % 3 ===0 && entrada % 5 === 0)
    return 'Fizzbuzz'
if(entrada % 3 === 0)
    return 'fizz'
if(entrada % 5 === 0)
    return 'buzz'

return entrada
}
