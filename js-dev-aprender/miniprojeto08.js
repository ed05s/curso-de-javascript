// exercício nota escolar
// obter a média a partir de um Array

// 0-59  : F
// 60-69 : D
// 70-79 : C 
// 80-89 : B 
// 90-100: A

const array=[70,80,85,90]
console.log(mediaDoAluno(array))

function mediaDoAluno(notas){
    const media = calcularMedia(notas) // média é igual o resultado da funçaõ   //calcularMedia(), ou seja, para valor calculado nesta funçaõ, a mediDoAluno terá um return 
   
    if(media<59) return 'f'
    if(media<69) return 'D'
    if(media<79) return 'C'
    if(media<89) return 'B'
    return 'A'
}
function calcularMedia(array){ //verifica e faz a soma de todos os elementos do array
    let soma=0
    for( let valor of array){ // para cada elemento do array (soma = soma+valor)
        soma+=valor

    }
    return soma/(array.lenght)// total da soma é dividido pelo total de         elemtos do array, gerando a méddia
}
    
