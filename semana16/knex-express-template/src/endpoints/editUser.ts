import {Request, Response}  from "express"
import updateUser from "../data/updateUser"

export default async function editUser(
   req: Request, 
   res:Response
   ){
         // validar entradas da requisição

       try{         
           if(
                req.body.name === '' ||
                req.body.nickname === '' ||
                req.body.email === '' 
           ){
               res.status(400).send({
                   message:"Nenhum dos campos pode estar em branco"
               })
            
           } if (!req.body.name && !req.body.nickname && !req.body.email){
               res.status(400).send({
                   message: "Escolha ao menos um valor para alterar"
               })
           }


           //consukltar o banco de dados 
            await updateUser (
                req.params.id,
                req.body.name,
                req.body.nickname,
                req.body.email 
            )
 
           //validar as saídas do banco !! Não valida as aaídas 


           //respoder  a requisição

           res.status(200).send ({
               message:"Usuário atualizado"
           })


       }catch (error){
           res.status(400).send({
            message: error.message || error.sqlMessage
            
           })
       }

   }