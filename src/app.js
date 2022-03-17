import express from "express"; 
import Funcionarios from "./controllers/funcionarios.js";




const app = express(); 
const port = process.env.PORT || 3002; 

app.use(express.json())


app.listen(port, () => console.log('servidor rodando na porta 3002')) 

Funcionarios.funcionarios(app)