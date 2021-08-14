export type Transaction = {
value: number,
date: Date,
description:string 
}


export type Account = {
name:string,
CPF: string,
dateOfBirth:Date,  //nascimento
balance:number , // saldo
statement: Array<Transaction>
}