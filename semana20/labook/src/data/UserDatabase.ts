import { connection } from "..";
import { User } from "../model/User";
import {BaseDatabase} from "./BaseDatabase";

interface UserDBModel {
  id: string;
  email: string;
  name: string;
  password_hash: string;
}

export class UserDatabase extends BaseDatabase{
  async save(user: User) {
    const userDB = {
      id: user.id,
      email: user.email,
      name: user.name,
      password_hash: user.passwordHash,
    };
    
    // NAO TENHO CERTEZA QUE FUNCIONA!!!!!!!!!!
    // A ideia é criar se não existe, e atualizar se já existe
    await connection("labook_users").insert(userDB).onConflict('id')
      .merge();

    return user
  }

  async findUserByEmail(email: string) {
    const queryResponse = await connection("users").select('*').where({email: email})

    const userDB = queryResponse[0]

    if(!userDB) {
      return null
    }

    const user: User = {
      id: userDB.id,
      email: userDB.email,
      name: userDB.name,
      passwordHash: userDB.password_hash,
    }

    return user
  }
}
