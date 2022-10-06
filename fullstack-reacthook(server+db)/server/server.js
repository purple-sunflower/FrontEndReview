const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/hello',(req,res)=>{
    console.log('/hello')
})

// 전체 조회
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

// 조건 조회
app.get('/board/:no',(req,res)=>{
    console.log('/board/:no')
    const no = req.params.no
    db.query(`select * from board where no=${no}`,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

//추가
// app.post('/board/add/:no',(req,res)=>{
//     console.log('/board')
//     db.query("select * from board",(err,data)=>{
//         if(!err){
//             res.send(data)
//         }else{
//             console.log(err)
//         }
//     })
// })

//수정
// app.update('/board',(req,res)=>{
//     console.log('/board')
//     db.query("select * from board",(err,data)=>{
//         if(!err){
//             res.send(data)
//         }else{
//             console.log(err)
//         }
//     })
// })

// 삭제
// app.delete('/board',(req,res)=>{
//     console.log('/board')
//     db.query("select * from board",(err,data)=>{
//         if(!err){
//             res.send(data)
//         }else{
//             console.log(err)
//         }
//     })
// })

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})