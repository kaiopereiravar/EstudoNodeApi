const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

//rotas - endpoints
app.post('/createProduct', (req,res) => {
    const name = req.body.name
    const price = req.body.price

    res.json({message: `Foi enviado os dados: "${name}" e "${price}" para o back`})
})

app.get('/', (req, res) => {
    res.json({message: 'primeira rota criada com sucesso'})
})
app.listen(3001)