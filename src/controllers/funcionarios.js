import database from "..infra/database.js"; 
import FuncionariosModel from "../models/Funcionarios";
import Utils from "../utils/utils.js";

class Funcionarios { 
    static usuarios(app) {
        
    
    app.post("/funcionarios", (req, res) => {
        const user = new FuncionariosModel( req.body.nome, req.body.sobrenome, req.body.email, req.body.cpf, req.body.turno)
            database.push(user)
            res.status(201).json(database); 
    })

}}
