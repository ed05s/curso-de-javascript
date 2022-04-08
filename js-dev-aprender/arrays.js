//introdução aoss arrays
// add novos elementos
// remover elementos
//dividir elemntos
// dividir arrays
// combinar arrays


//---------------adicionando elementos em um array

// const numeros = [1,2,3]

// //inicio
// numeros.unshift(0) // add no inicio do array
// console.log(numeros)

// //meio
// numeros.splice(1,0,'a')// add o numero entre os parametros passados
// console.log(numeros)

// //final
// numeros.push(5) //add ao final do array
// console.log(numeros)


//----------encontrando elementos primitivos

// const numeros = [1,2,3,1]
// console.log(numeros.indexOf(2))//retorna o index do elemnto do array

// console.log(numeros.lastIndexOf(1))//retorna o index da ultima ocorrencia de um número

// console.log(numeros.includes(2))



//---------encontrando elementos por tipo de referencia

// const marcas=[
//     {id:1, nome:'a'},
//     {id:2, nome:'b'}

// ]
// const marca = marcas.find(function(marca){
//     return marca.nome==='b'

// })
// console.log(marca)



//----------arrow functions-------


// const marcas=[
//     {id:1, nome:'a'},
//      {id:2, nome:'b'}

//  ]
// console.log(marcas.find(marca=>marca.nome==='b'))
//     return 

 
//  console.log(marca)


//-----removendo elementos de um array
// const numeros =[1,2,3,4,5,6]


// //final
// const ultimo = numeros.pop()
// console.log(numeros.pop())//remove o ultimo do array

// //inicio
// const primeira = numeros.shift()
// console.log(numeros.shift()) // remove o primeiro de um array

// //meio
// const meio = numeros.splice(2,1)
// console.log(meio)

// console.log(numeros)


//----esvaziando um array
//solução 2
// const numeros =[1,2,3,4,5,6]

// numeros.length=0
// console.log(numeros)

// numeros.splice(0,numeros.length)
// console.log(numeros)


//-----combinando um array

// const primeiro =[1,2,3]
// const segundo =[4,5,6]
//const combinado = primeiro.concat(segundo) //concat une os arrays
//console.log(combinado)




//-------dividir um array

//combinado.slice(1,3) // indice inicial e final, vai extrair os valores entre os indices

//const cortado = combinado.slice(1) //tambem pode ser passado apenas um parametro ele vai iniciar do indice escolhido ate o ultimo
//console.log(cortado)



//---------OPERADOR SPREAD

// const combinado=[...primeiro,'%',...segundo,'#']
// console.log(combinado)

// const clonado = [...combinado]
// console.log(clonado)


//---------f o r   e a c h ----------
//  const numeros=[1,2,3,4,5,6]


// // for(let numero in numeros){
// //     console.log(numeros[numero])
// // }


// //--------combinando arrays

// const combinado =numeros.join('.') //adiciona a string entre os elemntos do array
// console.log(combinado)

// const frase = 'ola bem vindo ao curso'
// const resultado = frase.split(' ')
// console.log(resultado)
// console.log(resultado.join('-'))