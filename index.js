import express from 'express'
import imc from './calculo.js'

const app = express()
const PORTA = 8000

app.listen(PORTA, () =>{
    console.log(`O projeto está rodando em http://localhost:${PORTA}`)
} )

app.use(express.static('public'))

// app.get('/', (req,res) =>{
//     const numeroFront1 = Number(req.query.valor)
//     const numeroFront2 = Number(req.query.valor)
//     const resultado = imc(numeroFront1,numeroFront2)

//     res.json({
//         imc: resultado
//     })

// })

app.get('/imc', (req, res) => {

    const massa = Number(req.query.massa)
    const altura = Number(req.query.altura)

    const resultado = imc(massa, altura)

    res.json({
        imc: resultado
    })

})