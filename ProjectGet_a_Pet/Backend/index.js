const express = require('express')
const cors = require('cors')

const app = express()

//config json response
app.use(express.json())

//solve cors
app.use(cors({ credentials: true, origin: 'http://localhost:3001' }))

//Publix folder for images
app.use(express.static('public'))

//routes
app.listen(5000)