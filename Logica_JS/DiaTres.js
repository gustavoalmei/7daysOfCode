function conhecendoDev() {
    let name = prompt("Olá!, qual o seu nome?");
    let area = prompt(
      `Qual área você deseja seguir ${name}? 1- Front-End 2- Back-End`
    );
    let lang = [];
  
    while(area != 1 && area != 2){
      area = prompt(`Qual área você deseja seguir ${name}? 1- Front-End 2- Back-End`);
    }
    
    if(area == 1){
        console.log("Que bacanaa!! Você pode escolher aprender React, Vue, entre outros.");
    }else if(area == 2){
        console.log("Que bacanaa!! Você pode escolher aprender C#, Java, entre outros.");
    }
    
    let especializar = prompt(`Mas me conta aí, você quer: 1- continuar se especializando na área, ou, 2- se tornar um FullStack?`)
    
    if(especializar == 1){
      let resposta = prompt("E qual linguagem você gostaria de se especializar, ou conhecer?")
      for(let i = 0; i <= lang.length; i++){
        
        lang.push(resposta)
        
        resposta = prompt("Mais alguma linguagem? Se não tiver, só digita 1 aí ;) ")
        
        if(resposta == 1){
          i = lang.length + 1;
        }
      }
  
      console.log('Essas são as linguagens que você quer aprender ou se especializar: ')
      for(let i = 0; i<lang.length; i++){
        console.log(lang[i])
      }
    }else if(especializar == 2){
      console.log("Iradoo!!! espero ver você em breve!!")
    }
  }
  
  conhecendoDev();