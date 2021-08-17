const colors = require('colors')
let tarefas = ["Criar formigas"]
tarefas.push(process.argv[2])
console.log("Tarefa adicionada com sucesso.".white)
console.log(tarefas)