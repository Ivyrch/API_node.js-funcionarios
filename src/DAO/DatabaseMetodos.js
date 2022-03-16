import { rejects } from "assert";
import Database from "../infra/database.js";


class DatabaseMetodos{
    static createTable(){
        const tabela_funcionarios = `
        CREATE TABLE IF NOT EXISTS funcionarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            nome VARCHAR(70),
            sobrenome VARCHAR(60),
            email VARCHAR(60),
            cpf   VARCHAR(30),
            turno VARCHAR(20)
            )
            `
            Database.run(tabela_funcionarios, (e)=>{
                if(e){
                    console.log("erro ao criar Tabela")
                } else {
                    console.log("Tabela criada com sucesso")
                }
            })
        }

        static insertFuncionario( id, nome, sobrenome, email, cpf, turno){
            const insert_funcionario = `INSERT INTO funcionarios VALUES (?, ?, ?, ?, ?, ?)`
   
              return new Promise ((resolve, reject) => 
               Database.run(insert_funcionario, [ id, nome, sobrenome, email, cpf, turno], (e)=>{
                   if(e){
                       reject(e)
                       
                   } else {
                       resolve( { message:"Funcionário criado com sucesso"})
                       
                   }
            }) 


   )
}
}
    
DatabaseMetodos.createTable()


export default DatabaseMetodos