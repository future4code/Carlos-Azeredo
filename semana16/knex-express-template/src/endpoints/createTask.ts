import {Request, Response}  from "express"
import moment from 'moment'
import insertTask from "../data/insertTask"


export default async function createTask(
   req: Request, 
   res:Response
   ) {
       try{
           // validar entradas da requisição
           if(
            !req.body.title ||
            !req.body.description ||
            !req.body.deadline ||
            !req.body.authorId 
           ){
            res.status(400).send({
                message: ' "title", "description", "deadline" e "authorId" são obrigatórios'                              
               })
               return 
               
           }

           const dateDiff: number = moment(req.body.deadline, 'DD/MM/YYYY').unix() - moment().unix()
        
           if(dateDiff <=0){
            res.status(400).send({
                message: ' "Deadline" deve ser uma data futura'                              
               })
               return 
           }
           const id: string = Date.now() + Math.random().toString()

           await insertTask(
                id,
                req.body.title,
                req.body.description,
                moment(req.body.deadline,'DD/MM/YYYY').format('YYYY-MM-DD'),
                req.body.authorId,
           )

           //consultar o banco de dados ..


           //validar as saídas do banco
           //OBS e para ess não hous saídas do banco

           //respoder  a requisição
           res.status(200).send({
            message:"Tarefa criada com sucesso",
            id,
            deadline:req.body.deadline
           })


       }catch (error){
           res.status(400).send({
            message: error.message || error.sqlMessage
            
           })
       }

   }