// criar função que retorna a soma dos multiplos de 3 e de 5
//multiplos de 3
//3,6,9
//multiplos de 5
//5,10

//somando os multiplos
 // armazenar os multiplos 3
 // armazenar os multiplos de 5
 // somar os dois 
somar(10)
function somar(limite){
   let multide3=0
   let multide5=0
    for(i=0;i<=limite;i++){
        if(i%3===0){
            multide3+=i
            console.log(multide3)
        }if(i%5===0){
            multide5+=i
            console.log(multide5)
        }    
    }
    console.log(multide3+multide5)
}



