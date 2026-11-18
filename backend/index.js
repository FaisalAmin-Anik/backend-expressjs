const express = require('express');
var cors = require('cors')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

const users=[
    {
        firstname:"Faisal",
        lastname:"Amin",
        email:"faisalaminanik786786@gmail.com",
        password: 1234567891
    },
    {
        firstname:"promit",
        lastname:"hossain",
        email:"faisalaminanik786786@gmail.com",
        password: 1234567891
    },
    {
        firstname:"imtiaz",
        lastname:"siddique",
        email:"faisalaminanik786786@gmail.com",
        password: 1234567891
    }
]
const product=[
    {
        id:1,
        name:"gpu",
        price:50000,
        stock:40
    },
    {
        id:2,
        name:"processor",
        price:20000,
        stock:30
    },
    {
        id:3,
        name:"ssd",
        price:12000,
        stock:70
    }
]
app.get('/users', (req, res) => {
  res.send(users)
})
app.get('/product', (req, res) => {
  res.send(product)
})

app.post('/users',(req,res)=>{
    users.push(req.body)
    res.send("data recieved")
})
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})