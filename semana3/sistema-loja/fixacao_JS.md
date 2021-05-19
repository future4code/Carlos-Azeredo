function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
const salarioFixo = 2000
const bonus = (qtdeCarrosVendidos*100)
const porcentagemDosCarros = (valorTotalVendas * 0.95)
const salarioFinal = salarioFixo + bonus +porcentagemDosCarros

  return salarioFinal
}
console.log(salarioFinal)




Fixação dia 19/05


functionCalculaPrecoTotal(quantidade){
let precoFinal1 = 1.30 * quantidade
let precoFinal2 = 1.00 * quantidade
if(quantidade < 12){
return precoFinal1

}else{
  return precoFinal2
}

}