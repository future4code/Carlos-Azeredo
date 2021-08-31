import connection from "../connection";

export default async function selectUserById(
    id:string
){
    const result = await connection('TodoListUser')
    .select('*')
    .where({id })
 
    //Porque índice 0 porque o select vai retornar sempre uma lista (um Array) só com um objeto dentro .. por isso preciso acessar a posição 0, retornado assim só um ob.jeto 
    return result [0]
}
