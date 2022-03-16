import database from "..infra/database.js"; 
import FuncionariosModel from "../models/Funcionarios";
import Utils from "../utils/utils.js";

class Funcionarios { 
    static usuarios(app) {
        
    
    app.post("/funcionarios", (req, res) => {
        // const id = parseInt(req.body.id) 
        DatabaseMetodos.insertFuncionario( req.body.id, req.body.nome, req.body.sobrenome, req.body.email, req.body.cpf, req.body.turno)
        then((response) => {
            res.status(201).json(response)
        })
        .catch((e) => {
            res.status(400).json(e)
        })
           
    })

}}
