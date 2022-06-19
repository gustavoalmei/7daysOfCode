function lista (){
    let frutas = [];
    let congelados = [];
    let laticinios = [];
    let produtosCasa = [];
    let limpeza = [];
    let pergunta = prompt("Deseja adicionar algum produto a lista? 1- Sim 2- Não");
  
    while(pergunta != 1 && pergunta != 2){
      pergunta = prompt("Deseja adicionar algum produto a lista? 1- Sim 2- Não");
    }
    
    if(pergunta == 1){
      let repetir = 0;
      for(let i = 0; i <= repetir; i++){
        let produtos = prompt("Vamos lá, qual produto deseja adicionar?");
        let categoria = prompt("Qual a categoria dele? 1-Frutas 2-Congelados 3-Laticinios 4-Produtos para Casa 5-Limpeza");
    
        switch(categoria){
          case "1" : frutas.push(produtos);
            break;
          case "2" : congelados.push(produtos);
            break;
          case "3" : laticinios.push(produtos);
            break; 
          case "4" : produtosCasa.push(produtos);
            break;
          case "5" : limpeza.push(produtos);
            break;
        }
        
        let outro = prompt("Adicionar outro produto? 1- Sim 2- Não")
          if(outro == 1){
            repetir++
          }else{
            console.log(`Aqui está sua lista de produtos: 
            Frutas: ${frutas}, 
            Congelados: ${congelados}, 
            Laticínios: ${laticinios}, 
            Produtos para casa: ${produtosCasa}, 
            Limpeza: ${limpeza}`)
          }
      }
        
    }else if(pergunta == 2){
        console.log(`Aqui está sua lista de produtos: 
        Frutas: ${frutas}, 
        Congelados: ${congelados}, 
        Laticínios: ${laticinios}, 
        Produtos para casa: ${produtosCasa}, 
        Limpeza: ${limpeza}`)
      }
  }
  
  lista()