/*1 Exercício 

bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

Resposta: a . false
          b . false
          c . true
          d . boolean   */


/*2 Exercício 
  
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
///
const soma = primeiroNumero + segundoNumero

console.log(soma)

Resposta : será impresso a junção dos numeros ex:2 e 2 =22.*/

/*3  Exercicio 

let primeiroNumero = Number(prompt('Digite um numero!'))
let segundoNumero = Number(prompt('Digite outro numero!'))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

//----------------------Exercícios de escrita de código -----------------------------------


//a) Pergunte a idade do usuário

//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

//c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

//d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

/*const idade = prompt('insira sua idade!')
const idadeAmigo = prompt('Qual a idade do seu amigo?')

const idadeMaior = Number(idade) > Number(idadeAmigo)

console.log ('Sua idade é maior do que a do seu melhor amigo?', idadeMaior)
const difIdade = idade - idadeAmigo
console.log ('a diferença de idade', difIdade)


2 . Faça um programa que:

a) Peça ao usuário que insira um número **par**

b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */

/*
let primeiro = Number(prompt('Insira um número par?'))
console.log('o resto da divisão', primeiro % 2) 

    c ) Resto =0 
    d ) ele traz o resto da divisão
*?
fim 2


/*3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

a) A idade do usuário em meses

b) A idade do usuário em dias

c) A idade do usuário em horas */

/*
let idadeAnos = prompt('Qual é a sua idade?')

console.log('Sua idade em meses é ', idadeAnos * 12)
console.log('Sua idade em meses é ', idadeAnos * 365)
console.log('Sua idade em meses é ', idadeAnos * 8760)


 4 .Faça um programa que pergunte ao usuário dois números.
  Em seguida, faça as operações e imprima no console as seguintes mensagens:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true 



let primeiro = Number(prompt('Me diga um número?'))
let segundo  = Number(prompt('Me diga outro número?'))

let divisao = (primeiro%segundo) === 0

console.log('O primeiro é maior que o segundo', primeiro > segundo)
console.log('O primeiro é igual ao segundo', primeiro == segundo)
console.log('O primeiro é divisível pelo segundo',divisao)
console.log('O segundo é divisível pelo primeiro',divisao) */

const consultas = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
]
function ordenaPorNome() {
  for(let i = 0; i < consultasNome.length; i++) {
    for(let j = 0; j < consultasNome.length - i - 1; j++) {
      if(consultasNome[j].nome > consultasNome[j + 1].nome) {
        const temp = consultasNome[j]
        consultasNome[j] = consultasNome[j + 1]
        consultasNome[j + 1] = temp
      }
    }
  }
  return consultasNome
}