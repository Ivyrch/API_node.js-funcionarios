import DatabaseMetodos from "../DAO/DatabaseMetodos.js"; 

await DatabaseMetodos.deleteFuncionario({id:2, nome:"Marthaaaaa", sobrenome:"Ferraz", email:"marthaaferraz@gmail.com", cpf:65766950447, turno:"noite"}); 