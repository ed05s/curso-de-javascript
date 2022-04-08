// criar objeto endereço

// rua , cidade, cep, exibirendereco()

let endereço = {
    rua:'anenida D',
    cidade:'canaã dos carajás',
    cep : 2097176688,
}
function exibirendereco(endereço){
    for(let chave in endereço){
        console.log(chave,endereço[chave])
    }

 }
 exibirendereco(endereço)