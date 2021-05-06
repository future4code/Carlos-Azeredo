/*
 ----------Exercicios de interpretação de código--------------------------

 1_

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

a.  undefined
b.  null
c.  1
d.  3
e.  Array(11)
f.  9  */

/*
2 - 

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Resposta :SUBI NUM ÔNIBUS EM MARROCOS 27   */



//--------------  Exercícios de escrita de código  --------------------------------



//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, 
//imprima na tela a seguinte mensagem:
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

/*
 const nome = prompt("Qual é seu nome?")
 const emailDoUsuario = prompt("Qual é seu e-mail?")

const frase = "O e-mail do usuário  " + emailDoUsuario + " foi cadastrado com sucesso.Seja bem vinda(o)" + nome  
 console.log(frase) 

*/



//a) Imprima na tela o array completo:
//b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.
/*
const frase = ("Essas são as minhas comidas preferidas:")
console.log(frase.toUpperCase())
const comidasPreferidas = [
"Sushi",
"Feijoada",
"Strogonoff",
"Pitza", 
"Hamburguer"]
console.log(comidasPreferidas)
*/

// // const numero = prompt("Insira um número de 1 a 5")

// // console.log(`A posição escolhida foi ${numero},
// // que corresponde à raça: ${racasDeCachorro[numero - 1]}`)

// racasDeCachorro.push("Lulu da pomerânia", "a", "b", 10)

// racasDeCachorro.pop()
// racasDeCachorro.pop()
// racasDeCachorro.pop()

// console.log(racasDeCachorro)


//Faça um programa seguindo os passos


//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

//c) Imprima o array na tela

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

//e) Remova da lista o item de índice que o usuário escolheu.

//f) Imprima o array na tela




let listaDeTarefas = []


listaDeTarefas[0]=prompt("Qual a primeira tarefa que vc precisa realizar hoje?")
listaDeTarefas[1]=prompt("Qual a segunda tarefa que vc precisa realizar hoje?")
listaDeTarefas[2]=prompt("Qual a terceira tarefa que vc precisa realizar hoje?")


console.log(listaDeTarefas)
const indice = prompt("Digite o índide 0,1 ou 2 para saber de uma tarefa que vc realizou") 
console.log(`A posição escolhida foi ${indice},que corresponde à tarefa: ${listaDeTarefas[indice]}`)


