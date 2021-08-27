import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
  }
});

const app: Express = express();

app.use(express.json());
app.use(cors());
app.get("/", async (req, res) =>{
    const result = await connection.raw("show tables") 
    console.log(result);
    res.send("Hello Call servidor no ar ")
})

app.get("/actors", async (req,res)=>{
    try {

        //raw: 
      //const result = await connection.raw( "SELECT * FROM Actor") 
     // const actors = result[0]
     //Query BUILDER
     const actors = await connection("Actor") 
 
       res.send(actors)
       
    } catch (error) {
       console.log(error);
       
       res.status(500).send(error.sqlMessage || error.message)
    }
 })
 

app.post("/actor", async (req, res) => {
    try {
    await connection.raw(`
    INSERT INTO Actor
    (id, name, salary, birth_date, gender)
    VALUES (
    ${Date.now().toString()},
    "${req.body.name}",
    ${req.body.salary},
    "${req.body.birthDate}",
    "${req.body.gender}"
    );
    `)
    res.status(201).send("Success!")
    } catch (error) {
    console.log(error.message);
    res.status(500).send("An unexpected error occurred")
    }
   })

   app.put('/actor/:id', async (req, res) => {
    try {
    await connection("Actor")
    .update({
    name: req.body.name,
    salary: req.body.salary,
    birth_date: req.body.birthDate,
    gender: req.body.gender
    })
    .where({ id: req.params.id })
    res.send("Success!")
    } catch (error) {
    console.log(error.message);
    res.status(500).send("An unexpected error occurred")
    }
   })
   

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
