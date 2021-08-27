# Carlos Alberto Dutra Azeredo 
## _SEMANA 16 AULA 47_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

```
Exercício 1

a) No RAW temos como resposta um objeto cada coluna como uma propriedade e seu respectivo dado baseado no parâmetro que foi passado na função getActorById.

b) const getActorByName = async (name: string): Promise => { const result = await connection.raw(SELECT * FROM Actor WHERE name= '${name}') return result[0][0] }

getActorByName("Alessandra Negrini")
.then(result =>{ console.log(result)})
.catch(err => {console.log(err)})
c) const getActorsByGender = async (gender: string): Promise =>{ const result = await connection.raw(SELECT COUNT (*) as count FROM Actor WHERE gender = '${gender}')

const count = result[0][0].count;
return count;
}

getActorsByGender("female") .then(result =>{ console.log(result)}) .catch(err => {console.log(err)})

Exercício 2

a) const updateActorInfo = async (id: string, salary: number): Promise =>{ const result = await connection("Actor") .update({salary: salary}) .where("id", id) }

updateActorInfo('002', 30000) .then(result => {console.log(result); }) .catch(err => {console.log(err); })

b) const deleteActor = async (id: string): Promise => { const result = await connection("Actor") .delete() .where("id", id) }

deleteActor("004") .then(result => {console.log(result);}) .catch(err => {console.log(err);})

c) const avgSalaryByGender = async (gender: string): Promise => { const result = await connection("Actor") .avg("Salary as average") .where({gender}) return result[0].average }

avgSalaryByGender("female") .then(result => {console.log(result);}) .catch(err => {console.log(err);})

Exercício 3....


Exercício 3
Está na hora de começar a criar alguns endpoints. O mais simples de todos talvez seja o de pegar o ator pelo id.  Queremos criar um método GET que receba como path param o id do ator cujas informações queremos pegar. Para isso, devemos:
- Usar a função `get` do express
- Definir o *path param* com a **chave id: `/actor/:id`.** Dessa forma, poderemos acessar o endpoint assim: `http://localhost:3000/user/id-do-usuario`
a) app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const actor = await getActorById(id)
        res.status(200).send(actor)
    } catch (err) {
        res.status(400).send({message: err.message})
    }
})

b. Crie um endpoint agora com as seguintes especificações:

- Deve ser um GET (`/actor`)
- Receber o gênero como um *query param* (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero

res  - b) app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });


Exercício 4 
Para finalizar o estudo, você vai criar mais um endpoint. Só que, antes, queremos dar mais um exemplo. Vamos fazer um endpoint para criar um novo ator. Para isso, devemos:

- Definir o método como `POST`
- Criar um path: `/actor`
- Receber os parâmetros pelo body


app.post("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.salary
    );

    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});


Perceba que tivermos que criar uma nova data. Isso acontece porque o JSON só envia para gente um número, um booleano ou uma string. Assim, como a nossa função espera receber um `Date`, devemos criar uma nova instância dessa classe.

Crie um endpoint para cada uma das especificações abaixo:

- a.
    - Deve ser um PUT (`/actor`)
    - Receber o salário e o id pelo body
    - Simplesmente atualizar o salário do ator com id em questão
- b.
    - Deve ser um DELETE (`/actor/:id`)
    - Receber id do ator como *path param*
    - Simplesmente deletar o ator da tabela
  a) app.put("/actor", async (req: Request, res: Response) =>{
    try {
        await updateActorInfo(req.body.id, req.body.salary)
        res.status(200).send({message: "Success!"})
    } catch (err) {
        res.status(400).send({message: err.message})
    }
})
b) app.delete("/actor/:id", async (req:Request, res: Response) => {
    try {
        await deleteActor(req.params.id)
    } catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
})

Exercício 5
Agora, você vai treinar novamente usando a tabela de Filmes. Só que vai ser bem mais direto agora. Vamos te passar o endpoint, com as especificações e você terá que implementá-lo por completo: a função do banco, a função do express, tudinho!

Especificações do Endpoint:

- Deve ser um POST (`/movie`)

- Receber todas as informações pelo body

- Criar o filme na tabela
## RESPOSTA 
const createMovie = async (
    id: string,
    title: string,
    synopsis: string,
    releaseDate: Date,
    playingLimitDate: Date
) => {
    await connection
    .insert({id: id, title: title, synopsis: synopsis, release_date: releaseDate, playing_limt_date: playingLimitDate})
    .into("Movie")
}
app.post("/movie", async (req: Request, res: Response) => {
    try {
        await createMovie(
            req.body.id,
            req.body.title,
            req.body.synopsis,
            req.body.releaseDate,
            req.body.playingLimitDate
        )
        res.status(200).send({message: "Success"})
    } catch (err) {
        res.status(400).send({message: err.message})
    }
})
------------------------------------------------------------------------------------------------------------------------------------------------
Exercício 6 
Especificações do Endpoint:

- Deve ser um GET (`/movie/all`)
- Não recebe nada
- Retorna todos os filmes. Ele deve retornar, no máximo, uma lista com 15 itens

##RESPOSTA
const getAllMovies = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie LIMIT 15
  `);
  return result[0];
};
app.post("/movie/:id", async (req: Request, res: Response) => {
  try {
    const movies = await getAllMovies();
    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
------------------------------------------------------------------------------------------------------------------------------------------------
Exercicio 7
Especificações do Endpoint:

- Deve ser um GET (`/movie/search`)
- Deve receber o termo de busca como uma query string (`/movie/search?query=`)
- Faz a busca entre todos os filmes que tenham o termo de busca no nome ou na sinopse. Além disso, a lista deve vir ordenada pela data de lançamento

### RESPOSTA
app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovie(req.query.query as string);
    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```


```
