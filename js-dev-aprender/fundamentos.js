//{----A R R A Y S----}
// let puma = ['Gabriel','corno',5]

// console.log(puma[1])

//---------------------------------------------------------


//{----F U N C T I O N S----}
//VERBO + SUBSTANTIVO

// corSite = 'azul'
// function resetaCor(cor, tonalidade){
//     corSite= cor + tonalidade
// }
// console.log(corSite)
//    resetaCor('vermelho ', 'claro')  
//    console.log(corSite)  


//(----FUNCTION QUE NÃO RETORNA NADA----)
// function dizerNome(){
//     console.log('ed')
// }
// dizerNome()


//(----FUNCTION COM RETORNO----)
// function x2(valor){
//     return valor*2
// }
//    console.log(x2(9))

//---------------------------------------------------------


//{----O P E R A D O R E S---}
//ARITMÉTICOS 
// ATRIBUÇÃO
//COMPARAÇÃO
//LÓGICOS
//BITWISE
//INCREMENTE E DECREMENTO

//---------------------------------------------------------

//---- O P E R A D O R E S  A R I T M É T I C O S  + , - , / , ** , *
// let salario=100

//  console.log(salario+salario)
//  console.log(salario-salario)
//  console.log(salario/salario)
//  console.log(salario*salario)
//  console.log(5**5)

//---------------------------------------------------------

//(---- OPERADORE DE INCREMENTO E DECREMENTO----)
// ++ E --

//let idade=18

// console.log(++idade) // atribui primeiro
// console.log(idade++) // atribui depois

//---------------------------------------------------------

//(----O P E R A D O R E S  DE   A T R I B U I Ç ÃO----) = , == , += , -= , == , ===

//let tecladoGamer=100
//tecladoGamer = tecladoGamer+tecladoGamer
  //também equivalente ao comando acima
//tecladoGamer+= tecladoGamer

//console.log(tecladoGamer)
// == verifica se elementos são iguais
//console.log("1"==1)

//igualdade restrita verifica valor e tipo
//console.log("1"===1)

//(----O P E R A D O R   T E R N Á R I O----)

//TEM UM CLIENTE, 100 PPONTOS = PREMIUM/ COMUM

//  let pontos = 100
//  let tipo = pontos>=100 ? "premium":"comum"
//  console.log(tipo)

//---------------------------------------------------------

//(----O P E R A D O R E S   L Ó G I C O S----)

//OPERADOR (&&) E = RETORNA TRUE SE duas CONDIÇÕES FOREM true

// let maiordeIDade = true
// let carteira = true
// let podeAplicar = maiordeIDade && carteira
// console.log(podeAplicar)

//OPERADOR (||) ou = RETORNA TRUE SE uma CONDIÇÕES FOREM true

// let maiordeIDade = false
// let carteira = false
// let podeAplicar = maiordeIDade || carteira
// console.log( "pode aplicar ",podeAplicar)

//OPERADOR NOT (!)

// let candidatoRecusado = !podeAplicar
// console.log( "não pode aplicar ",candidatoRecusado)

//---------------------------------------------------------


//(----O P E R A D O R E S   NÃO  B O O L E A N O S----)

// FALSY 
 // undefined
 //null
 //0
 //falso
 //''
 //Nan not a number

 // TRUTHY 
  // true

//   let corPersonalizada = ''
//   let corPadrao = 'azul'
//   let corPerfil = corPersonalizada || corPadrao

//   console.log(corPerfil)

//---------------------------------------------------------



//{----E S T R U T U R A S   D E   R E P E T I Ç Ã O----}

// IF..ELSE
//SWITCH...CASE

// SE A HORA ESTIVER ENTRE 06:00 ATE 12:00 : BOM DIA
// SE A HORA ESTIVER ENTRE 12:00 ATE 18:00 : BOA TARDE
// CASO O CONTRÁRIO : BOA NOITE

// let hora = 10
//  if(hora<12){
//      console.log("bom dia")
//  }else if(hora>12 && hora<=18){
//      console.log("boa tarde")    
//  }else{
//      console.log('boa noite')
//  }

//SWITCH

let permissao = 'comum'//comum , gerente , diretor

// switch (permissao) {
//     case 'comum':
//         console.log('usuário comum')
//     break;

//     case 'gerente':
//             console.log(' usuário gerente')
//     break;

//     case 'diretor':
//         console.log('usuário diretor')
//     break;

//     default: 
//        console.log('não reoconhecido')
//         break;
// }
  



