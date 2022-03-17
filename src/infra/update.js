import DatabaseMetodos from "../DAO/DatabaseMetodos.js"; 

await DatabaseMetodos.updateFuncionario({id:2, nome:"Martha", sobrenome:"Ferraz", email:"marthaaferraz@gmail.com", cpf:65766950447, turno:"noite"}); 