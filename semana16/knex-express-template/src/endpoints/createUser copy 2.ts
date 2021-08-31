import {Request, Response}  from "express"

export default async function createUser(
   req: Request, 
   res:Response
   ) {
       try{
           // validar entradas da requisição


           //consukltar o banco de dados 


           //validar as saídas do banco


           //respoder  a requisição


       }catch (error){
           res.status(400).send({
            message: error.message || error.sqlMessage
            
           })
       }

   }