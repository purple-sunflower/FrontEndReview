const express = require('express');
const app = express();
const PORT = process.env.PORT || 2500;
const bodyParser =  require('body-parser')
const db=require('./config/db')
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    console.log('root')
})

app.get('/class',(req,res)=>{
    console.log('/class')
    db.query("select * from onlineClass",(err, data) => {
        if(!err){
            console.log(data)
        }
        else{
            console.log(err)
        }
    })
})

app.get('/class/:number',(req,res)=>{
    console.log('/class/:number')
    const number = req.params.number
    console.log(number)//11687
    db.query(`select * from onlineClass where number=${number}`,(err, data) => {
        if(!err){
            console.log(data)//영화정보~3개
        }
        else{
            console.log(err)
        }
    })
})

app.post('/class',(req,res)=>{
    console.log('/class')
    const classObj = req.body
    console.log(classObj)
    const number = classObj.number // 16962
    const title = classObj.title // 올라 with 클라라
    const subject = classObj.subject // 스페인어
    const level = classObj.level // 초급
    const teacher = classObj.teacher // 클라라
    db.query(`insert into onlineClass(number,title,subject,level,teacher) values(${number},'${title}',${subject},${level},${teacher})`,(err, data) => {
        if(!err){
            console.log(data)//영화정보~3개
        }
        else{
            console.log(err)
        }
    })
})

app.put('/class',(req,res)=>{
    console.log('/class')
    const classObj=req.body
    console.log(classObj)
})

app.delete('/class/:number',(req,res)=>{
    console.log('/class/:number')
    const number = req.params.number
    console.log(number) // 13815
})

app.listen(PORT, ()=>{
    console.log(`Server On : http://localhost:${PORT}`)
})