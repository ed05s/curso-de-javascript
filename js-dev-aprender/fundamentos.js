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

//let permissao = 'comum'//comum , gerente , diretor

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


//{E S T R U T U R A S   DE  R E P E T I Ç Ã O}
// LAÇO FOR 
// WHILE
// DO WHILE
// FOR IN
// FOR OF 

//---LAÇO FOR
//  for(let i=0;i<5;i++){
//      if(i%2!==0){
//          console.log(i)

//      }
//  }

//---LAÇO WHILE

//let i = 5

// while(i>=1){
//     if(i%2!==0){
//         console.log(i)
       
//     }
//     i--
// }

//---LAÇO DO WHILE -- COMANDO EXECUTA ANTES DA AVALIAÇÃO
//  let i =0
//  do{
//      console.log(i)
//      i++
//  }while(i<=10)

//---FOR IN ---LOPING MELHOR PARA OBJETOS
// let pessoa={
//     nome:'ed',
//     idade:23
// }
// for(let chave in pessoa){
//     console.log(pessoa)
// }

//const cores = ['vermelho', 'azul','verde']
// for(let indice in cores){
//     console.log(cores[indice])
// }

//---LAÇO FOR OF

// for(let cor of cores){
//     console.log(cor)
// }

//{----N A T U R E Z A  D I Â M I C A  DE OBJETOS-----}

// const mouse ={
//   cor : 'red',
//   marca : 'razer',
// }
//  mouse.velocidade=5000 // adicionando mais uma propriedade

//  mouse.trocarDpi = function(){ //adicionando uma função ao objeto
//    console.log('mudando dpi')
//  }
//  delete mouse.velocidade //deletando uma propriedade do objeto


//   console.log(mouse)

  //--------------------------------------------------------------

  //{----C L O N A N D O   O B J E T O S----}

  // const celular = {
  //   marcaCelular:'asus',
  //    tamanhoTela:{
  //        vertical:155,
  //        horizontal:75
  //    },
  //  capacidadedeBateria:5000,
  //  ligar : function(){
  //       console.log('fazendo Ligação')
  //  }



  // }
  // const novoObjeto = Object.assign({
  //   bateria:5000 //possível adicionar mais propriedades no objeto
  // },celular)
  // console.log(novoObjeto)


  // //spread
  // const objeto2={...celular} 
  // console.log(objeto2)

  

  //{----F U N Ç Ã O   M A T H----}

  // Math.random() // um número aleatório de 0 a 1
  
  // Math.max(3,9,15) // retorna o maior

  // Math.min() // retorna o menor 



  //{---- M É T O D O S  DE S T R I N G}

  //tipo primitivo 
//   const mensagem = 'minha string'

//  console.log(mensagem.includes('minha')) //--verifica se existe a string passada no parametro
//  //
//  console.log(mensagem.startsWith('minha'))//--verifica se a string começa com a palavra passada no parametro
// //
//  console.log(mensagem.endsWith('string'))//--verifica se a string termina com a palavra passada no parametro
// //
//  console.log(mensagem.indexOf('minha')) //--retorna o index da string passada no parametro
//  //
//  console.log(mensagem.replace('minha','sua'))//--troca a primeira strinf do parametro pela segunda
//  //
//  console.log(mensagem.trim()) //--retira os espacos do final e da frente
//  //
//  console.log(mensagem.split(' ')) //--separa as palavras com um espaço

//   //tipo objeto
//   const outramensagem= new String('bom dia')

//   console.log(outramensagem[2])//--retorna o index da string



//{---- T E M P L A T E   L I T E R A L----}

//const mensagem=" oi isso é minha\nprimeira mensagem "


// object
// boolean
// string
// template literal

// let nome = 'ed'
// const outra =`oi isto é a minha primeira mensagem`
// let mensagem = `${outra} me chamo ${nome}`
// console.log(mensagem)
  

//{----  D A T E ----}

// const dataa = new Date()

// const data1 = new Date('march 06 2022 09:02')

// const data2 = new Date(2022,03,08,10,09)//ano mes dia hora minuto
// console.log(data2)

// console.log(data2.toDateString()) //data para string