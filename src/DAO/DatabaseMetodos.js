import Database from "../infra/database.js";


class DatabaseMetodos{
    static createTable(){
        const tabela_funcionarios = `
        CREATE TABLE IF NOT EXISTS funcionarios (
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


    }
    
DatabaseMetodos.createTable()


export default DatabaseMetodos