//importando express com Request e Response e cors
import express, { Request, Response } from "express"
import cors from "cors"
//extra : importanto configuração de rede do node
import { AddressInfo} from "net"

//iniciando a aplicação web com express
const app = express()

//ativando os módulos de bodyparser  e cors
app.use(express.json())
app.use(cors())

type user = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: user [] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]


//Exercício 1
//a) O método a ser utilizado será o GET.
//b) A entidade a ser manipulada será indicada com '/users'

//Exercício 3
//a) query parameters
app.get ("/users", (req: Request, res :Response) => {
 let codeError:number =  400
  try {
   
   const name: string = req.query.name as string
   const user:  user | undefined = users.find((user) => user.name === name) 
   if(!user){
       codeError = 404
       throw new Error("Usuário não autorizado.")
   }
   
   res.status(200).send(user)
   }catch (error) {
       res.status(codeError).send ({message: error.message})
   }
   })

   app.get ("/users/:id", (req: Request, res :Response) => {
    let codeError:number =  400
     try {
      
      const id: number = Number(req.params.id)
   
      if(isNaN (id)){
          codeError = 422 // unprocessable entity
          throw new Error("Me mande um número como id. Por gentileza.")
      }
       const user = users.find((user) => {
         return user.id === id
       })
       if (!user) {
        codeError = 404 
        throw new Error("Usuário não autorizado.")
       }

      res.status(200).send(user)
      }catch (error) {
          res.status(codeError).send ({message: error.message})
      }
      })

      app.post ("/users", (req: Request, res :Response) => {
        let errorCode:number = 400
        try{
         
          const {id, name, email, type, age} =  req.body
          if(!id || !name || !email || !type || !age){
            errorCode = 422
            throw new Error ("Cheque os campos !!! pelase check the fields")
          }

          
          const newUser: user  = {
            id,
            name,
            email,
            type,
            age
          }
          users.push(newUser)
          res.status(201).send({message: "Use created successefully"})

        }catch (error){
          res.status(errorCode).send({messagem : error.message})
        }
        

      })

 //EXERCÍCIO 4
  //a) Não muda nada.
  //b) O método PUT não é apropriado pois ele atualiza algo já existente.

      app.post("/users", (req: Request, res :Response) => {
        let errorCode:number = 400
        try{
         
          const {id, name, email, type, age} =  req.body
          if(!id || !name || !email || !type || !age){
            errorCode = 422
            throw new Error ("Cheque os campos !!! pelase check the fields")
          }git 

          
          const newUser: user  = {
            id,
            name,
            email,
            type,
            age
          }
          users.push(newUser)
          res.status(201).send({message: "Use created successefully"})

        }catch (error){
          res.status(errorCode).send({messagem : error.message})
        }
        

      })
   

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
