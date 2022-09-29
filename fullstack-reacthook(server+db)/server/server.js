const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/hello',(req,res)=>{
    console.log('/hello')
})

app.get('/board',(req,res)=>{
    console.log('/board')
    db.query("select * from board",(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

app.get('/board/title',(req,res)=>{
    console.log('/board/title')
    const title=req.body.title
    db.query(`select * from board where title like "%${title}%"`,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})