//=========Exercicios de interpretação de código=============

// 1. O que o código abaixo está fazendo?
//Qual o resultado impresso no console?
//resultado: 10

// let valor = 0
// for(let i = 0; i < 5; i++) {
//       console.log("valor", valor,"+", "i", i)
//     valor += i

// }
// console.log(valor)

// 2. Leia o código abaixo:

// a) O que vai ser impresso no console?
//Resultado:
// 19
// 21
// 23
// 25
// 27
// 30

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {

//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// b) Se eu quisesse acessar o **índice** de cada elemento
//dessa lista, o `for...of...` é suficiente? Se sim, o que
//poderia ser usado para fazer isso?
//resultado:

// let indice = 0
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {

//   if (numero > 18) {
// 		console.log(numero, "indice", indice)
// 	}

//   indice++
// }

// 3. Qual seria o resultado impresso no console,
// se o usuário digitasse o número `4` ?
//resultado:

//=========Exercicios de implementação  de código=============

//EXERCICIOS DE IMPLEMENTAÇÂO
// 1. Pergunte ao usuário quantos bichinhos de estimação ele
//tem e guarde esse dado em uma variável.
//
// const bichinhos = Number(prompt("quantos bichinhos de estimação você tem?"));
// console.log(bichinhos);

//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

//   if(bichinhos === 0) { console.log("Que pena! Você pode adotar um pet!")}

//b) Se a quantidade for maior que 0, solicite que o usuário digite
// os nomes deles, um por um, e guarde esses nomes em um array.

// if(bichinhos > 0){
//   let arrayBichinhos = []
//   for(let i = 0; i < bichinhos; i++){

//     arrayBichinhos.push(prompt("diga o nome do seu bichinho"))
//   }
//   console.log(arrayBichinhos)//c) Por fim, imprima o array com os nomes dos bichinhos no console
// }

// 2. Considere que você tenha acesso a um `array`
//(chamado de 'array original') que é composto somente de números.
// Baseando-se nisso, crie uma função para cada um dos itens abaixo,
// realizando as operações pedidas:

// const arrayOriginal =  [5, 22, 98, 121, 10]

//a) Escreva um programa que **imprime** cada um dos valores do array original.

// function imprimirValorDoArrayOriginal (arrayOriginal) {
//   for(let valor of arrayOriginal){
//     console.log(valor)
//   }
// }
// imprimirValorDoArrayOriginal(arrayOriginal)

//b) Escreva um programa que **imprime** cada um dos valores
//do array original divididos por 10.

// function imprimirValorDoArrayOriginal (arrayOriginal) {
//   for(let valor of arrayOriginal){
//     console.log(valor/10)
//   }
// }
// imprimirValorDoArrayOriginal(arrayOriginal)

//c) Escreva um programa que **crie** um novo array contendo,
//somente, os números pares do array original e **imprima**
//esse novo array.

// function imprimirValoresPares (arrayOriginal) {
//   let arrayNumerosPares = []
//   for(let valor of arrayOriginal){
//     if(valor % 2 === 0){
//       arrayNumerosPares.push(valor)
//     }

//   }
//   console.log(arrayNumerosPares)
// }
// imprimirValoresPares(arrayOriginal)

//d) Escreva um programa que **crie** um novo array contendo
//strings, da seguinte forma: "O elemento do índex `i` é: `numero`".
//Depois, **imprima** este novo array.

// function imprimirArrayDeStrings (arrayOriginal){
//   let arrayDeStrings = []
//   let i = 0
//   for(let valor of arrayOriginal){
//     arrayDeStrings.push(`O elemento do índex ${i} é: ${valor}`)
//     i++
//   }
//   console.log(arrayDeStrings)
// }
// imprimirArrayDeStrings (arrayOriginal)

//e) Escreva um programa que imprima no console o maior e
// o menor números contidos no array original.

// function pegarMaiorOuMenorNumero (arrayOriginal){
//   let maiorNumero = 0;
//   let menorNumero = Infinity;
//   for(let i = 0; i < arrayOriginal.length; i++){

//     if(arrayOriginal[i] < menorNumero){
//       menorNumero = arrayOriginal[i]
//     }else if(arrayOriginal[i] > maiorNumero){
//       maiorNumero = arrayOriginal[i]
//     }
//   }
//   console.log("O maior numero é:", maiorNumero)
//   console.log("O menor numero é:", menorNumero)
// }
// pegarMaiorOuMenorNumero (arrayOriginal)

//================= Desafios =====================
//DESAFIOS 1 e 2
 console.log("Vamos jogar!")
 const numeroEscolhido = Math.floor(Math.random() * 100) + 1

let acertou = false
let tentativas = 0

let numeroChutado
 while(!acertou){
    numeroChutado = Number(prompt("Chute um número"))
    tentativas++
    console.log(`O número chutado foi: ${numeroChutado}`)
   if(numeroChutado === numeroEscolhido){
       console.log("Acertou!")
        console.log(`O número de tentativas foi : ${tentativas}`)
        acertou = true
     } else if (numeroEscolhido > numeroChutado){
         console.log("Errou. O número escolhido é maior")
          } else {
             console.log("Errou. O número escolhido é menor")
    }
}

