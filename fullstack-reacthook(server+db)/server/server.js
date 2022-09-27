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

// app.post('/add/board',(req,res)=>{
//     console.log('/add/board')
//     console.log(req.body)
//     const name=req.body.name
//     const age=req.body.age
//     const height=req.body.height
    
//     db.query(`insert into person(name,age,height) values('${name}',${age},${height})`,(err,data)=>{
//         if(!err){
//             //console.log(data)
//             res.send(data)
//         }else{
//             console.log(err)
//         }
//     })

// })

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})