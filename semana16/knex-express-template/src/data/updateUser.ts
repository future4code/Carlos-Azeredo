import connection from "../connection";


export default async function updateUser(
    id:string,
    name?:string,
    nickname?:string,
    email?:string
){
    if(name){
        await connection.raw(`
            UPDATE TodoListUser
            SET name = '${name}'
            WHERE ID = '${id}'
        
        `)

    }
    if(nickname){
        await connection.raw(`
            UPDATE TodoListUser
            SET nickname = '${nickname}'
            WHERE ID = '${id}'
        
        `)

    }
    if(email){
        await connection.raw(`
            UPDATE TodoListUser
            SET email = '${email}'
            WHERE ID = '${id}'
        
        `)

    }
}