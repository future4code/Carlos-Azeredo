// --- EXEMPLOS ---------------------------------------------------------------------
//Exercícios de interpretação de código

// --- EXERCÍCIO 1 ------------------------------------------------------------------
/*
Resposta: Matheus Nachtergaele
          Virginia Cavendish   */


// --- EXERCÍCIO 2 ------------------------------------------------------------------


/*
Resposta: 
A) {nome: "Juca", idade: 3, raca: "SRD"}
{nome: "Juba", idade: 3, raca: "SRD"}
{nome: "Jubo", idade: 3, raca: "SRD"

B) A sintaxe ...  realiza uma cópia inteira de um objeto para outro onde se pode mudar (ou adicionar), se
quisermos, apenas uma ou outra propriedade.
*/



/*------------------Exercícios de escrita de código --------------------------------



// --- EXERCÍCIO 1------------------------------------------------------------------
//Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três 
// apelidos). 
//Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// a)


// a)

const pessoa = {
nome:"Carlos Dutra",
apelidos:["Call", "Callzinho", "Carlinhos"]
}
function funcExercicio1(objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}    
    funcExercicio1(pessoa)


// (b)

const novaPessoa = { ...pessoa, apelidos: ["Amands", "Mandis", "AMANDA"] };

funcExercicio1(novaPessoa);


// (b)
const novaPessoa = { ...pessoa, apelidos: ["Amands", "Mandis", "AMANDA"] };
funcExercicio1(novaPessoa);

*/
// --- EXERCÍCIO 2 ------------------------------------------------------------------


// (a)

// const pessoa = {
//   nome: "Bruno",
//   idade: 23,
//   profissao: "Instrutor"
// };

// (b)

// Retorno: ["Bruno", 5, 23, "Instrutor", 9]

// function imprimeInformacoes(individuo) {
//   return [
//     individuo.nome,
//     individuo.nome.length,
//     individuo.idade,
//     individuo.profissao,
//     individuo.profissao.length
//   ];
// }

// console.log(imprimeInformacoes(pessoa));

// Exercício 3
// (a)
// const carrinho = [];

// (b)
// const abacaxi = {
//   nome: "abacaxi",
//   disponibilidade: true
// };

// const melancia = {
//   nome: "melancia",
//   disponibilidade: true
// };

// const tomate = {
//   nome: "tomate",
//   disponibilidade: true
// };

// (c)
// function adicionaFrutaNoCarrinho(fruta) {
//   carrinho.push(fruta);
// }

// adicionaFrutaNoCarrinho(abacaxi);
// adicionaFrutaNoCarrinho(melancia);
// adicionaFrutaNoCarrinho(tomate);

// (d)
// console.log(carrinho);

/* =======================
Desafios
========================== */

// 1
// function criaPessoa() {
//   const pessoa = {
//     nome: prompt("Nome da pessoa:"),
//     idade: Number(prompt("Idade da pessoa:")),
//     profissao: prompt("Profissão da pessoa:")
//   };

//   console.log(pessoa);
//   console.log(typeof pessoa);
// }

// criaPessoa()

// 2
// function comparaAnoDeLancamento(primeiroFilme, segundoFilme) {
//   return `O primeiro filme foi lançado antes do segundo? ${
//     primeiroFilme.anoDeLancamento < segundoFilme.anoDeLancamento
//   }
// O primeiro filme foi lançado no mesmo ano do segundo? ${
//     primeiroFilme.anoDeLancamento === segundoFilme.anoDeLancamento
//   }`;
// }

// const matrix = {
//   nome: "Matrix",
//   anoDeLancamento: 1999
// };

// const johnWick = {
//   nome: "John Wick",
//   anoDeLancamento: 2014
// };

// console.log(comparaAnoDeLancamento(matrix, johnWick));

// 3
// function inverteDisponibilidade(fruta) {
//   return {...fruta, disponibilidade: !fruta.disponibilidade}
// }

// console.log(inverteDisponibilidade(abacaxi))
// console.log(inverteDisponibilidade(inverteDisponibilidade(abacaxi)))




