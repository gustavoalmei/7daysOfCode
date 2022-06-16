const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let resposta = prompt(
  `Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`
);

function conferir() {
  if (resposta == 1 || resposta == 2) {
    if (resposta == 1) {
      console.log("Muito bom! Continue estudando e você terá muito sucesso.");
    }

    if (resposta == 2) {
      const outraLinguagem = prompt(
        "Ahh que pena... Já tentou aprender outras linguagens?"
      );
      console.log("Muito bom! Continue estudando e você terá muito sucesso.");
    }
  } else {
    alert("Valor inválido, digite novamente.");
    resposta = prompt("Responda com o número 1 para SIM ou 2 para NÃO.");
    conferir()
  }
}

conferir(resposta)