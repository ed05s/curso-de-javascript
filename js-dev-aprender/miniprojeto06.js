//criar um método para ler proprriedades de um objeto e
// exibir somente as propriedades do tipo que estão nesse objeto

const carro={
    modelo:'kwid',
    ano: 2018,
    motor: 1.4,
    marca: 'renault'
}
exibirpropriedade(carro)
    function exibirpropriedade(obj){
        for(prop in obj){
            if(typeof obj[prop]==='string')
                console.log(prop,obj[prop]) //prop = propriedade do objeto// se tipo da propriedade do objeto for string, valor será imprimido
            
        }
    }

 