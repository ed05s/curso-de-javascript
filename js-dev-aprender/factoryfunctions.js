// const celular = {
//     marcaCelular:'asus',
//     tamanhoTela:{
//         vertical:155,
//         horizontal:75
//     },
//     capacidadedeBateria:5000,
//     ligar : function(){
//         console.log('fazendo Ligação')
//     }

// }
// factory function

// criando um construtor
// function criarCelular(marcaCelular, tamanhoTela,capacidadedeBateria){
//     return {
//         marcaCelular,
//         tamanhoTela,   
//         capacidadedeBateria,
//         ligar(){
//             console.log('fazendo Ligação')
//         }
    
//     }
    

// }
//  const celular1=criarCelular('zenfone',5.5,5000)
//  console.log(celular1)

 // constructor function
 //pascal case - UmDoisTresQuatro

//  function Celular(marcaCelular,tamanhoTela,capacidadedeBateria,){
//      this.marcaCelular = marcaCelular,
//      this.tamanhoTela =  this.tamanhoTela,
//      this.capacidadedeBateria = this.capacidadedeBateria,
//      this.ligar=function(){
//          console.log("fazendo ligação")
//      }
//  }
//  const celular = new Celular('asus',5,5,5000)
//  console.log(celular)

//function construtor

// function Postagem(titulo,mensagem,autor,estaovivo){
//     this.titulo=titulo,
//     this.mensagem=mensagem,
//     this.autor=autor,
//     this.visualizacoes=0,
//     this.comentarios=[],
//     this.estaovivo=false

// }
// let postagem= new Postagem('cafe','afelio',false)
// console.log(postagem)



//--------array de objetos faixa de preço------------

//primeira opção 

// let faixas=[
//     {tooltip:'ate $700', minimo:0,maximo:700},
//     {tooltip:'de $700 a 1000', minimo:700,maximo:1000},
//     {tooltip:'ate $1000 ou mais', minimo:0,maximo:99999999},
// ]

// // segunda opção function factory

// function criafaixa(tooltip,minimo,maximo){
//     return{
//         tooltip,
//         minimo,
//         maximo
//     }
// }
// let faixa2 =[
//     criafaixa('a',10,100),
//     criafaixa('b',100,1000),
//     criafaixa('b',1000,10000)

// ]


// //terceera opção
// function Faixapreco(tooltip,minimo,maximo){
//     this.tooltip=tooltip,
//     this.minimo=minimo,
//     this.maximo=maximo

// }
// let faixa3=[
//     new Faixapreco('d',10,30),
//     new Faixapreco('e',40,50),
//     new Faixapreco('f',60,80),
    
// ]
// console.log(faixas)
// console.log(faixa2)
// console.log(faixa3)


