function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let vezesNumero = 0 
  for (let num of arrayDeNumeros){
    if (num === numeroEscolhido){
      vezesNumero += 1
      
      
    }else if (numeroEscolhido === 4){
      console.log(`O número ${numeroEscolhido} aparece ${vezesNumero} x`)
      
      
    }else { (method) console.log(...data :any []): void
console.log (`Número não encontrado`)    
    
  }
  
}
return vezesNumero
}

console.log(contaOcorrencias([1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5]))