function randomizacao(){
    let max = 10;
    let min = 0;
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    let chances = 3;
  
    for(let i = 0; i < 3; i++){
      let resposta = prompt("Qual número você acha que é?")
      if(resposta != number){
        console.log(`Que pena, você errou! Mas ainda tem ${chances} chances.`)
        chances--
        if(chances == 0){
          console.log(`Não foi dessa vez, o número era o ${number}.`)
        }
      }else{
        console.log(`Párabens, você acertouu!!! O número era ${number}.`)
      }
    }
  }
  
  randomizacao()