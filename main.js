const express = require("express")

const bodyParser = require("body-parser")

const app = express()

const PORT = 5050

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(bodyParser.raw())

app.get('/add', function (req, res) {

    let num1 = req.query.num1
    let num2 = req.query.num2
    let sum = num1 + num2
    //console.log(sum)
    res.status(200).send(sum); //cant figure out which console log will show up on postman
    // res.send(sum)
})

app.put('/reciprocal/:num', function (req, res){
    let num1 = req.params.num1
    let num2 = req.params.num2
    let sum = num1 / num2

    //console.log(sum)
    res.status(200).send(sum); //cant figure out which console log will show up on postman
// res.send(sum)
})



app.post('/multiply', function (req, res){
    let num1 = req.body.num1
    let num2 = req.body.num2
    let sum = num1 * num2


    //console.log(sum)
    res.status(200).send(sum); //cant figure out which console log will show up on postman
// res.send(sum)
})



app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})

