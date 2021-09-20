import { Request, Response } from "express"
import  UserBusiness  from "../business/UserBusiness"
import {SignupDTO, LoginDTO }  from "../model/User"

export class UserController {
  private userBusiness: UserBusiness

  constructor() {
    // Instanciando o business
    this.userBusiness = new UserBusiness()
  }

  async signup(request: Request, response: Response) {
    try {
      // Monta o DTO
      const signupDTO: SignupDTO = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
      };

      // Valida o DTO
      if (!signupDTO.email || !signupDTO.name || !signupDTO.password) {
        response.statusCode = 400
        throw new Error("Algum parâmetro faltando");
      }

      // Invoca o caso de uso
      const output = await new UserBusiness().signup(signupDTO)

      console.log(output)
            if(!output){
                response.statusCode = 400;
            }

      response.send({ token: output.token });
    } catch (error: any) {
      response.status(500).send(error.message);
    }
  }

  async login(request: Request, response: Response) {
    try {
      const loginDTO: LoginDTO = {
        email: request.body.email,
        password: request.body.password,
    };

    if (!loginDTO.email || !loginDTO.password) {
        response.statusCode = 400;
        throw new Error("Preencha todos os campos");
    };

      // Invoca o caso de uso
      const output = await this.userBusiness.login(loginDTO);

      response.send({ token: output.token });
    } catch (error: any) {
      response.status(500).send(error.message);
    }
  }
}
