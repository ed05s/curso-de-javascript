//Medidor de velocidade
// a cada 5km acima de 70 1 ponto na carteira
// caso ponto maior que 12 carteira suspendida
radar(150)

function radar(velocidade){
    const velecidadeMax = 70
    const kmporponto = 5
    if(velocidade<=velecidadeMax){
        console.log('ok')

 }  else{
     const pontos= Math.floor(( velocidade - velecidadeMax)/kmporponto)
     if(pontos>=12){
         console.log(`carteira suspensa você atingiu ${pontos} pontos na carteira`) //msth.floor retorna valores quebrados em inteiros
     }else
        console.log( 'pontos ' +pontos)

 }
}
