function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
const salarioFixo = 2000
const bonus = (qtdeCarrosVendidos*100)
const porcentagemDosCarros = (valorTotalVendas * 0.95)
const salarioFinal = salarioFixo + bonus +porcentagemDosCarros

  return salarioFinal
}
console.log(salarioFinal)