import {Request, Response}  from "express"
import selectUserById from "../data/selectUserById"

export default async function getUserById(
   req: Request, 
   res:Response
   ) {
       try{
           // validar entradas da requisição obS: como vamos receber po Path Parametros ele não vai nem acessar então ão precisa validar
           
           //consultar o banco de dados 
           const user = await selectUserById(req.params.id)

           if(!user){
               res.status(404).send({
                   message: "Usuário não encontrado"                                      
             })
                
           }


           //validar as saídas do banco


           //respoder  a requisição 

           res.status(200).send({
            message: "Sucesso!",
            id: user.id,
            nickname: user.nickname                                      
      })


       }catch (error){
           res.status(400).send({
            message: error.message || error.sqlMessage
            
           })
       }

   }