// --- Exercícios de interpretação de código ---------------------------------------------------------------------


/* --- EXERCÍCIO 1 ------------------------------------------------------------------
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) Explique o que o código faz. Qual o teste que ele realiza?

O códico verifica se o numero digitado é divisivel por 2 e o módulo/resto  fori igual a 0 se for ele imprime no console passou no teste .. 
caso tenha resto ele  traz a mensagem que "Não passou no teste"

b) divisíveis por 2 : 2,4,8,10,12 ...

c)a) Explique o que o código faz. Qual o teste que ele realiza?

Caso tenha resto ele  traz a mensagem que "Não passou no teste".  */

// --- EXERCÍCIO 2 ------------------------------------------------------------------

/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


a) Para que serve o código acima?
Para armazenar e informar o preço da fruta 

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
R: O preço da fruta  Maçã  é  R$  2.25 .


c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break`
 que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

 preco = 5

*/
/* --- EXERCÍCIO 3 ------------------------------------------------------------------

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) O que a primeira linha está fazendo?

Solicitando a inserção do número e armazenando o valor na variável.

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
Esse número passou no Teste
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

mensagem is not defined : index.js:72      */

// --- Exercícios de escrita de código ------------------------------------------------------------------


// --- EXERCÍCIO 1 ------------------------------------------------------------------

//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

/*
const comparaNumeros = () => {
    const a = Number(prompt("Qual a sua idade"));
    
    if (a > 18) {
      console.log("Você Pode dirigir");
    } else  (a < 18) 
      console.log("Você não pode dirigir");
   
    }

    comparaNumeros();
*/
  // --- EXERCÍCIO 2 ------------------------------------------------------------------


  //Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
  //Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else  
 
  /*
  const turnoDeAula_a = () => {
    const turno = (prompt("Digite seu turno: M V ou N ?")).toLocaleLowerCase()
    if (turno === 'm') {
        console.log("Bom dia !")
      } else if (turno === 'v') {
        console.log("Boa Tarde!")
      } else if (turno === 'n') {
        console.log("Boa Noite!")
      } else { 
          console.log("Turno inválido, informe M,V ou N")
      }
    }
    turnoDeAula_a()

    */

     // --- EXERCÍCIO 3 ------------------------------------------------------------------


     //utilizando a estrutura de switch case


/*
     const turnoDeAula_a = () => {
        const turno = (prompt("Digite seu turno: M V ou N ?")).toLocaleLowerCase()
        switch(turno) {
            case 'm':
            console.log("Bom dia !")
            break
            case 'v':
            console.log("Boa Tarde!")
            break
            case 'n':
            console.log("Boa Noite!")
            break
          default:
              console.log("Turno inválido, informe M,V ou N")
              break
          }
        }
        turnoDeAula_a()


        */

        // --- EXERCÍCIO 4 ------------------------------------------------------------------

       // Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for
        // do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme 
         //que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
         //Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
         
         //
         // EXERCÍCIO 4
// const genero = prompt("Qual o gênero do filme?");
// const preco = prompt("Qual o preço do ingresso?");

// if (genero === "fantasia" && preco <= 15) {
//   console.log("Bom filme!");
// } else {
//   console.log("Escolha outro filme :(");
// }

// DESAFIOS

// EXERCÍCIO 1
// const genero = prompt("Qual o gênero do filme?");
// const preco = prompt("Qual o preço do ingresso?");

// if (genero === "fantasia" && preco <= 15) {
//   const lanche = prompt("Escolha um lanchinho");
//   console.log("Bom filme!");
//   console.log(`Aproveite o seu ${lanche}`);
// } else {
//   console.log("Escolha outro filme :(");
// }

// EXERCÍCIO 2
// const nome = prompt("Digite seu nome");
// const tipo = prompt("[IN]ternacional ou [DO]mestico");
// const etapa = prompt("Semi-final [SF], Decisão Terceiro [DT] ou Final [FI]?");
// const categoria = Number(prompt("Categoria 1, 2, 3 ou 4?"));
// const quantidade = Number(prompt("Quantidade de ingressos?"));

// let precoUnitario;

// switch (etapa) {
//   case "SF":
//     switch (categoria) {
//       case 1:
//         precoUnitario = 1320;
//         break;
//       case 2:
//         precoUnitario = 880;
//         break;
//       case 3:
//         precoUnitario = 550;
//         break;
//       case 4:
//         precoUnitario = 220;
//         break;
//       default:
//         precoUnitario = 0;
//         break;
//     }
//     break;
//   case "DT":
//     switch (categoria) {
//       case 1:
//         precoUnitario = 660;
//         break;
//       case 2:
//         precoUnitario = 440;
//         break;
//       case 3:
//         precoUnitario = 330;
//         break;
//       case 4:
//         precoUnitario = 170;
//         break;
//       default:
//         precoUnitario = 0;
//         break;
//     }
//     break;
//   case "FI":
//     switch (categoria) {
//       case 1:
//         precoUnitario = 1980;
//         break;
//       case 2:
//         precoUnitario = 1320;
//         break;
//       case 3:
//         precoUnitario = 880;
//         break;
//       case 4:
//         precoUnitario = 330;
//         break;
//       default:
//         precoUnitario = 0;
//         break;
//     }
//     break;
//   default:
//     break;
// }

// if (tipo === "IN") {
//   precoUnitario = precoUnitario * 4.1;
// }

// let textoTipo;
// if (tipo === "DO") {
//   textoTipo = "Doméstico";
// } else if (tipo === "IN") {
//   textoTipo = "Internacional";
// } else {
//   textoTipo = "Erro";
// }

// let textoEtapa;
// switch (etapa) {
//   case "SF":
//     textoEtapa = "Semi-Final";
//     break;
//   case "DT":
//     textoEtapa = "Decisão Terceiro";
//     break;
//   case "FI":
//     textoEtapa = "Final";
//     break;
//   default:
//     textoEtapa = "Erro";
//     break;
// }

// // Saídas
// console.log("---Dados da compra---");
// console.log("Nome do cliente:", nome);
// console.log("Tipo do jogo:", textoTipo);
// console.log("Etapa do Jogo:", textoEtapa);
// console.log("Categoria:", categoria);
// console.log("---Valores--- ");
// console.log("Valor do Ingresso:", precoUnitario);
// console.log("Valor Total da Compra:", precoUnitario * quantidade);