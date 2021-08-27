import express, { Express, Request, Response} from "express"
import cors from "cors"
import { countries } from "./data"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("contries")

app.get("/countries", (req: Request, res : Response) => {

    res.send(countries)
})

app.get ("/countries/:id", (req: Request, res :Response) => {


const result = countries.find(
(country) => {return country.id === Number(req.params.id) }

)
if (result === undefined) {
    res.status(404).send("country not found")

} else {
    res.send(result)
}
})


app.delete ("/countries/:id", (req: Request, res :Response) => {
   try {
    // para pedit tokrn ou chave Authorizathion
    const token = req.headers.authorization
    if(!token){
        res.statusCode = 401
        throw new Error("Não autorizado.Verifique se o header 'authorization' foi passado")
    }
    const index = countries.findIndex(
    (country) => {return country.id === Number(req.params.id) }
    
    )

    if (index === -1){
        res.statusCode = 404
        throw new Error("País não encontrado") 
    }
    countries.splice(index, 1)
    res.status(204).end()
    
    }
    catch (error) {
        res.statusMessage = error.message
    }
    })


    // obs: coloca o servidor escutando a porta 3003
app.listen(3003,() =>{

    console.log("Servidor pronto!!") 
})

function result(result: any) {
    throw new Error("Function not implemented.")
}
