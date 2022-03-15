class Utils{
    static verificaEmail(database, email){
        let verifica = []
        for(let i = 0; i < database.length; i++){
            if(database[i].email == email){
                verifica.push(database[i])
            }
        }
        return verifica
    }
    static deletaPorEmail(database, email){
        let resposta = []
        for(let i = 0; i < database.length; i++){
            if(database[i].email != email){
                resposta.push(database[i])
            }
        }
        return resposta
    }
    
 
}

export default Utils