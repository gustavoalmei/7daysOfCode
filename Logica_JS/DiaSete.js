function Coleta() {
  console.log("Informe qual tipo de operação deve ser:");
  let op = prompt("1- Subtração 2- Multiplicação 3- Divisão 4-Adição");

  while (op < 1 || op > 4) {
    console.log("Valor invalido, digite novamente.");
    op = prompt("1- Subtração 2- Multiplicação 3- Divisão 4-Adição");
  }

  let a = prompt("Valor 1");
  let b = prompt("Valor 2");
  calculo(op, a, b);
}

function calculo(op, a, b) {
  let operador = op;
  let valorA = Number(a);
  let valorB = Number(b);

  switch (operador) {
    case "1":
      console.log(valorA - valorB);
      break;
    case "2":
      console.log(valorA * valorB);
      break;
    case "3":
      console.log(valorA / valorB);
      break;
    case "4":
      console.log(valorA + valorB);
      break;
  }

  let pergunta = prompt("Deseja calcular novamente? 1-Sim 2- Nao");
  if (pergunta == 1) {
    Coleta();
  } else {
    console.log("Ate mais!!");
  }
}

Coleta();
