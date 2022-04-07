const celular = {
    marcaCelular:'asus',
    tamanhoTela:{
        vertical:155,
        horizontal:75
    },
    capacidadedeBateria:5000,
    ligar : function(){
        console.log('fazendo Ligação')
    }

}
// factory function

// criando um construtor
function criarCelular(marcaCelular, tamanhoTela,capacidadedeBateria){
    return {
        marcaCelular,
        tamanhoTela,   
        capacidadedeBateria,
        ligar(){
            console.log('fazendo Ligação')
        }
    
    }
    

}
 const celular1=criarCelular('zenfone',5.5,5000)
 console.log(celular1)