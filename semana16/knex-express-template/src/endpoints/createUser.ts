import {Request, Response}  from "express"
import insertUser from "../data/insertUser"


export default async function createUser(
   req: Request, 
   res:Response
   ) {
       try{
           // validar entradas da requisição
         if(
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email 
         ){ 
             res
            .status(400)
            .send('Preencha os campos "name","nicname" e "email"') 
        }
           //consultar o banco de dados 
            const id: string = Date.now() + Math.random().toString()

            await insertUser(
                id,
                req.body.name,
                req.body.nickname,
                req.body.email 

            )

           //validar as saídas do banco.. Obs: e nesse caso não houe as saídas 


           //respoder  a requisição
           res
           .status(200)
           .send('Usuário criado com sucesso!') 
           

       }catch (error){
           res.status(400).send({
            message: error.message || error.sqlMessage
            
           })
       }

   }