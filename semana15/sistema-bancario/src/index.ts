import express, { Express, Request, Response  } from "express"
import cors from "cors"
import { accounts } from "./accounts"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req:Request, res:Response) =>{
    try{
       
        //consultar ou altrerar a base de dados
        const { name, CPF, dateOfBirthAsString } = req.body
        const [day, month, year] =dateOfBirthAsString.split("/") // 01/01/2021 = vai quebrar e deixar assim 01, 01, 2020[]
        const dateOfBirth:Date = new Date(`${year}-${month}-${day}`)

//validar as entradas da requisição
const ageInMilisseconds: number =  Date.now() - dateOfBirth.getTime()
const ageInYears:number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365
if (ageInYears < 18) {
    res.statusCode = 406
    throw new Error("Udade deve ser maior que 18 anos ") 
}



        accounts.push({
            name,
            CPF,
            dateOfBirth,
            balance:0,
            statement:[]
        })        
        //Validar os resultados da consulta.. não rprecisa porqe eu não fiz alteração e sim uma consulta 
        
         


        //enviar a resposta   
        res.status(201).send("Conta Criada co Sucesso!!!!!")       
    }catch(error){
        console.log(error)
        res.send(error.mensage)
    }
    
}) 

app.get("/users/all",(req:Request, res:Response) =>{

    //validando dados da consulta  no "IF"
try{
    if(!accounts.length){
        res.statusCode = 404
        throw new Error("Nenhuma conta encontrada!")
    }


    res.status(200).send(accounts)

}catch (error){
    res.send(error.mensage)
}


})

app.listen(3003, ()=>{
    console.log("Servidor está ronando na porta 3003")
})