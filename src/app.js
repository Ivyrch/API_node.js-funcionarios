import express from "express"; 


const app = express(); 
const port = process.env.PORT || 3002; 

app.use(express.json())

app.get('/pessoa', function (req, res) {
    res.send('Olá mundo')
})

app.post('/funcionarios', function(req, res) {
    console.log(req.body); 

    res.json({
        "statucCode": 200
    })
})

app.listen(port, () => console.log('servidor rodando na porta 3002'))