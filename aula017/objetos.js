let amigo ={nome:'jose',
    sexo:'m',
    peso:85.5,
    engordar(p=0){
        console.log("engordou")
        this.peso+=p
    }}
    amigo.engordar(5)
    console.log(`${amigo.nome} agora pesa ${amigo.peso}kg , tá uma jamantaz`)