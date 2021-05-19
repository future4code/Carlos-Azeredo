/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
 * */
/*
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 

    console.log("Bem-vindo(a) ao jogo de blackjack")
   

let jogo = confirm("Quer iniciar uma nova rodada?")

if (jogo) {
    let carta1User = comprarCarta()
    let carta2User = comprarCarta()
    let carta1Computador = comprarCarta()
    let carta2Computador = comprarCarta()

    let pontuacaoUsuario = carta1User.valor + carta2User.valor
    let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor

    console.log(`Usuário - cartas: ${carta1User.texto} ${carta2User.texto} - ${pontuacaoUsuario}`)
    console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - ${pontuacaoComputador}`)

    if (pontuacaoUsuario > pontuacaoComputador) {
        console.log("O usuário ganhou!")
    } else if (pontuacaoComputador > pontuacaoUsuario) {
        console.log("O computador ganhou!")
    } else if (pontuacaoUsuario === pontuacaoComputador) {
        console.log("Empate!")
    }

} else {
    console.log("O jogo acabou")
}

*/