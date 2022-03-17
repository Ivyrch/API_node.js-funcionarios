import database from "../infra/database.js"; 
import FuncionariosModel from "../models/Funcionarios.js";
import Utils from "../utils/utils.js";
import DatabaseMetodos from "../DAO/DatabaseMetodos.js";

class Funcionarios { 
    static funcionarios(app) {
        
        app.get("/funcionarios", (req, res) => {  
            DatabaseMetodos.listarTodos()
            .then((response) => {
                res.status(201).json(response)
            })
            .catch((e) => {
                res.status(400).json(e)
            })
               
        })
    
    app.post("/funcionarios", (req, res) => {  
        DatabaseMetodos.insertFuncionario( req.body.id, req.body.nome, req.body.sobrenome, req.body.email, req.body.cpf, req.body.turno)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((e) => {
            res.status(400).json(e)
        })
           
    })

    app.put("/funcionarios/:id", (req, res) => {  
          
        DatabaseMetodos.updateFuncionario(req, req.params.id)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((erro) => {
            res.status(400).json(erro)
        })
           
    })

    

}}

export default Funcionarios