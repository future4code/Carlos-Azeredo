// --- EXERCÍCIO de interpretação 1 ------------------------------------------------------------------


/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


resposta : 10 e 50 
*/

//b)  não vai aparecer nada 



/*2 -Leia o código abaixo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
 
resposta a função recebe como parametro um texto para para caixa baixa
 todas as letras e verifica se a string cenoura aparece em algum MediaStreamAudioDestinationNode

resposta  b :

i.   Eu gosto de cenoura     resp : True
ii.  CENOURA é bom pra vista resp : True 
iii. Cenouras crescem na terra resp : True




/* --- Exercícios de escrita de código ------------------------------------------------------------------


// --- EXERCÍCIO 1 ------------------------------------------------------------------

1 - 

a) 


const nome = 'Carlos'
const idade = 33 
const cidade ='Brasília'
const estudante = 'Sou estudante'
function imprimeMsg()  {
console.log(`Eu sou ${nome}, tenho ${idade} anos , moro em  ${cidade},  e  ${estudante}`)
}
 imprimeMsg()

 */ 


 /*  b)



 function recebeFrase(nome, idade, cidade, profissao) {

return  `Eu sou ${nome}  , tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
 
}

const frase =recebeFrase('Carlos', 36 , 'Brasília - DF', 'Analista')

//console.log(frase)
 console.log(recebeFrase('Carlos', 36 , 'Brasília - DF', 'Analista'))

 */


 //2 - 

 //a)

function somaDoisNumeros(numero1, numero2) {
return numero1 + numero2
}

const resultado = somaDoisNumeros(10,30)
console.log('A)' , resultado)

//b
function verificaMaiorNumero(numero1, numero2) {
    return numero1 >= numero2

}
const primeiroNumeroMaior = verificaMaiorNumero(40,30)
console.log('B)',primeiroNumeroMaior)

//C

function verificaParidade(numero){
return numero % 2 == 0   
} 
const ehPar =verificaParidade   (4)
console.log('C)', ehPar)

//D

function retornaTamanho(texto) {
    return `${texto.length}, ${texto.toUpperCase()}`
}
console.log('D)', retornaTamanho('ola meu povo bonito'))

//Número 3 

function soma (numero1, numero2){
return numero1 + numero2 
}

function subtrai (numero1, numero2){
return numero1 - numero2    
}

function multiplica (numero1, numero2){
return numero1 * numero2
}

function divide (numero1, numero2){
return numero1 / numero2    
}

const primeiroNumero = Number(prompt('Insira o primeiro número!')) 
const segundoNumero = Number(prompt('Insira o segundo número!'))

console.log('Soma: ', soma(primeiroNumero, segundoNumero))
console.log('Dieferença: ', subtrai(primeiroNumero, segundoNumero))
console.log('Multiplicação: ', multiplica(primeiroNumero, segundoNumero))
console.log('Divisão: ', divide(primeiroNumero, segundoNumero))

//Desafios


//1 

const imprimeNoConsole = (variavel) => {
    console.log(variavel)
}
imprimeNoConsole('olá')

//b

const somaDoisValores = (valos1 , valor2) => {
    const soma = valos1 + valor2
    imprimeNoConsole(soma)
}
somaDoisValores(10,15)

//C

//a² = b² + c²

function calculaHipotenusa(b,c)  {
    const hipotenusaQuadrado = b ** 2 + c ** 2
    const hipotenusa = hipotenusaQuadrado ** (1/2)
    return hipotenusa
}

const resultadohipotenusa = calculaHipotenusa(2,2)
console.log('Hipotenusa:', resultadohipotenusa)