import express, {Request, Response} from "express"
import cors from "cors"
import { countries } from "./data"
import { country } from "./types"

const app = express()

app.use(express.json())
app.use(cors())

// 1)

app.get("/countries", (req: Request, res: Response) => {
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))
    res.status(200)
    res.send(result)
})

// 2) 

app.get("/countries/:id", (req: Request, res: Response) => {
    const result: country | undefined = countries.find(country => country.id === Number(req.params.id))
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Not found")
    }
})

// 3)

// app.get("/countries/search", (req: Request, res: Response) => {
//     let result: country[] = countries

//     try {

//     if (!req.query.name && !req.query.capital && !req.query.continent) {
//         throw new Error("Invalid Parameters")
//     }

//     if(req.query.name) {
//         result = result.filter((country) => country.name.includes(req.query.name as string)
//         )
//     }
//     if (req.query.capital) {
//         result = result.filter(
//             country => country.capital.includes(req.query.capital as string)
//         )
//     }
//     if (req.query.continent) {
//         result = result.filter(
//             country => country.continent.includes(req.query.continent as string)
//         )
//     }
//     res.status(200).send(result)
// } catch (error) {
//     res.status(400).send(error.message)
// }
// })

app.get("/countries/search", (req: Request, res: Response) => {
    let result: country[] = countries;
    try {
      if (!req.query.name && !req.query.capital && !req.query.continent) {
        throw new Error("Invalid Parameters");
      }
      if (req.query.name) {
        result = result.filter((country) =>
          country.name.includes(req.query.name as string)
        );
      }
  
      if (req.query.capital) {
        result = result.filter((country) =>
          country.capital.includes(req.query.capital as string)
        );
      }
  
      if (req.query.continent) {
        result = result.filter((country) =>
          country.continent.includes(req.query.continent as string)
        );
      }
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

// 4)

app.post("/countries/:id", (req: Request, res: Response) => {
    
    let errorCode: number = 400

    try {
        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
        )

        if (countryIndex === -1) {
            errorCode = 404
            throw new Error()
        }

        if (!req.body.name && !req.body.capital) {
            throw new Error("Invalid Parameters")
        }

        if (req.body.name) {
            countries[countryIndex].name = req.body.name
        }

        if (req.query.capital) {
            countries[countryIndex].capital = req.body.capital
        }

        res.status(200).send("Country successfully update")
    
    } catch (error) {
        console.log(error)
        res.status(errorCode).send(error.message)
    }
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})