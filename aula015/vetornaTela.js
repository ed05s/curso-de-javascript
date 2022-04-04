   let valores=[9,8,7,4,2,1]
   console.log(valores.sort())

// for(pos=0;pos<valores.length;pos++){
//     console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
// }
for(let pos in valores){

    console.log(valores[pos])
}
console.log(valores.indexOf(8))
