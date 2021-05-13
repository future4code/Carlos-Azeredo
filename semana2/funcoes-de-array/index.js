/* Exercícios de interpretação de códig


const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

A)  O que vai ser impresso no console?

os objetos do array e o conteúdo contendo o nome e apelido começando da posição 0.

*/

/*
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

B)O que vai ser impresso no console?

Será impresso o que está em item.nome :["Amanda Rangel", "Laís Petra", "Letícia Chijo"].


*/

/*
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

C) será impresso o que for diferente !== "Chijo" =    0: {nome: "Amanda Rangel", apelido: "Mandi"}
                                                      1: {nome: "Laís Petra", apelido: "Laura"}

*/

// Exercícios de escrita de código

//a) Crie um novo array que contenha apenas o nome dos doguinhos
/*
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]
const novoArrayB = pets.map((item, index, array) => {
    return item.nome
})
  
console.log(novoArrayB)
*/

//b) Crie um novo array apenas com os [cachorros salsicha]
/*
    const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
    ]
        const cachorroSalsicha = pets.filter((produto) => {
            return produto.raca === "Salsicha"
        })  
        const soCachorroSalsicha = cachorroSalsicha.map((produto) => {
            return produto.nome

        })
        console.log(soCachorroSalsicha)

*/

//C)  Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
//A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
/*
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
    const cachorroPoodle = pets.filter((produto) => {
        return produto.raca === "Poodle"
    })  
    const soCachorroPoodle = cachorroPoodle.map((produto) => {
        return produto.nome

    })
    console.log("Vc ganhou um cupom de desconto de 10% para tosar o/a:" , soCachorroPoodle) */
// 2 
//a)Crie um novo array que contenha apenas o nome de cada item

/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 
 const nomedeItem = produtos.map((produto) => {
     return produto.nome
     
} )

console.log(nomedeItem)

*/

// B) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 
 const criaObjeto = produtos.filter((produto) => {
    return produto
}) 
 const produtosComDesconto = criaObjeto.map((produto) => {
 return { nome: produto.nome, preco: (produto.preco * 0.95).toFixed(2) };
 });
     

console.log(criaObjeto,produtosComDesconto)
*/


//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas 
/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 
 const bebidas = produtos.filter((produto) => {
     return produto.categoria === "Bebidas";
     });

console.log(bebidas)

*/

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"


/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 
    
     const produtosYpe = produtos.filter((produto) => {
         return produto.nome.includes("Ypê");
         }); 

console.log(produtosYpe)
*/

//E)

/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 
    
     const produtosYpe = produtos.filter((produto) => {
         return produto.nome.includes("Ypê");
         }); 
         
          const compreYpe = produtosYpe.map((produto) => {
              return `Compre ${produto.nome} por ${produto.preco}`;
 });
console.log(compreYpe)
*/








// DESAFIO 1
/*
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" }
  ];
  
  // ITEM A
  const nomePokemons = pokemons.map((poke) => {
    return poke.nome;
  });
  
  const pokemonsOrdenados = nomePokemons.sort((a, b) => a.localeCompare(b));
  
  console.log("item a", pokemonsOrdenados);
  
  // ITEM B
  //https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
  const tipos = pokemons.map((poke) => {
    return poke.tipo;
  });
  
  console.log(tipos);
  
  const tiposSemRepetir = tipos.filter((tipo, index, array) => {
    return array.indexOf(tipo) === index;
  });
  
  console.log("item b", tiposSemRepetir);
  */