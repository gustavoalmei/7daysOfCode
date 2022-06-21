let todosProdutos = [];
let congelados = [];
let frutas = [];
let casa = [];

function mostrarLista(produtos) {
  let categorias = ["Congelados", "Frutas", "Casa"];
  for (let i in produtos) {
    if (produtos[i] != "") {
      console.log(`${categorias[i]}: ${produtos[i]}`);
    }
  }
}

function addProduto() {
  let repetir = 0;
  let produto = prompt("Qual produto você quer adicionar?");
  let categoria = prompt(
    "Qual a catergoria do produto? 1- Congelados 2- Frutas 3-Casa"
  );

  for (let i = 0; i <= repetir; i++) {
    let pergunta = prompt("Deseja adicionar mais algum? 1-Sim 2-Não");
    switch (categoria) {
      case "1":
        frutas.push(produto);
        break;
      case "2":
        congelados.push(produto);
        break;
      case "3":
        casa.push(produto);
        break;
    }

    if (pergunta == 1) {
      produto = prompt("Qual produto você quer adicionar?");
      categoria = prompt(`Qual a catergoria do produto? 
      1- Congelados 2- Frutas 3-Casa`);
      repetir++;
    } else {
      console.log("Aqui está a sua lista:");
    }
  }

  mostrarLista(todosProdutos);
}

function removeProduto(produtos) {
  let repetir = 0;
  let categorias = ["Congelados", "Frutas", "Casa"];
  let grupo = prompt(
    "Você quer remover o produto de qual grupo? 1-Congelados 2-Frutas 3-Casa"
  );
  let produto = prompt(
    `Você quer remover qual produto de ${categorias[grupo - 1]}?`
  );

  for (let i = 0; i <= repetir; i++) {
    let pergunta = prompt("Deseja remover mais algum? 1-Sim 2-Não");
    switch (grupo) {
      case "1":
        produtos[0].splice(produto, 1);
        break;
      case "2":
        produtos[1].splice(produto, 1);
        break;
      case "3":
        produtos[2].splice(produto, 1);
        break;
    }

    if (pergunta == 1) {
      grupo = prompt(
        "Você quer remover o produto de qual grupo? 1-Congelados 2-Frutas 3-Casa"
      );
      produto = prompt(
        `Você quer remover qual produto de ${categorias[grupo - 1]}?`
      );
      repetir++;
    } else {
      console.log("Aqui está a sua lista:");
    }
  }

  for (let item in produtos) {
    if (produtos[item] != "") {
      console.log(`${categorias[item]}: ${produtos[item]}`);
    }
  }
}

function lista() {
  let pergunta = prompt(
    "Deseja adicionar/remover algum produto a lista? 1- Adicionar 2- Remover 3-Sair"
  );

  while (pergunta != 1 && pergunta != 2 && pergunta != 3) {
    console.log("Valor inválido, digite novamente.");
    pergunta = prompt(
      "Deseja adicionar/remover algum produto a lista? 1- Adicionar 2- Remover 3-Sair"
    );
  }
  todosProdutos = [congelados, frutas, casa];

  if (pergunta == 1) {
    addProduto();
  } else if (pergunta == 2) {
    removeProduto(todosProdutos);
  } else {
    console.log("Até maais!!");
  }
}

lista();
