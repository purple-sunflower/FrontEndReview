const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;

app.get('/', (req, res)=>{
    res.send('root response')
})

app.get('/add/:num1&:num2', (req, res)=>{  // 덧셈
    console.log(req.params)
    console.log(req.params.num1)
    console.log(req.params.num2)
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num1)
    const add_total = num1 + num2
    res.send(num1 + ' + ' + num2 + ' = ' + add_total)
})

app.get('/sub/:num1&:num2', (req, res)=>{ // 뺄셈
    console.log(req.params)
    console.log(req.params.num1)
    console.log(req.params.num2)
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    const sub_total = num1 - num2
    res.send(num1 + ' - ' + num2 + ' = ' + sub_total)
})

app.get('/mul/:num1&:num2', (req, res)=>{ // 곱셈
    console.log(req.params)
    console.log(req.params.num1)
    console.log(req.params.num2)
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    const mul_total = num1 * num2
    res.send(num1 + ' x ' + num2 + ' = ' + mul_total)
})

app.get('/share/:num1&:num2', (req, res)=>{ // 나눗셈 (몫)
    console.log(req.params)
    console.log(req.params.num1)
    console.log(req.params.num2)
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    const share_total = num1 / num2
    res.send(num1 + ' / ' + num2 + ' = ' + share_total)
})

app.get('/remainder/:num1&:num2', (req, res)=>{ // 나눗셈(나머지)
    console.log(req.params)
    console.log(req.params.num1)
    console.log(req.params.num2)
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    const remainder_total = num1 % num2
    res.send(num1 + ' % ' + num2 + ' = ' + remainder_total)
})

app.listen(PORT,()=>{
    console.log(`Server On: http://localhost:${PORT}`)
})