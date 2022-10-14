const express = require('express');
const app = express();
const PORT = process.env.PORT || 2000;
const db = require('./config/db.js')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/hello',(req,res)=>{
    console.log('/hello')
})

// 전체 조회
app.get('/post',(req,res)=>{
    console.log('/post')
    db.query("select * from post",(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

// 조건 조회
app.get('/post/:no',(req,res)=>{
    console.log('/post/:no')
    const no = req.params.no
    db.query(`select * from post where no=${no}`,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})


// 추가
app.post('/post/add/' ,(req,res)=>{
    console.log('/post/add/')
    // const title = req.params.title
    // const contents = req.params.contents
    // const author = req.params.author
    // const date = req.params.date
    // 숫자는 그 전 게시물 +1, 날짜는 오늘 날짜 들어가게..
    db.query(`insert into post (no, title, contents, author, date, attach, hits) 
    values(23,"${title}","${contents}", "${author}", ${date}, 0, 0);`,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

//수정
app.put('/post/update/:no&:title:&:contents',(req,res)=>{
    console.log('/post/update/:no&:title:&:contents')
    const no = req.params.no
    const title = req.params.title
    const contents = req.params.contents
    db.query(`update post set title=${title}, contents=${contents} where no=${no}`,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

//삭제
app.delete('/post/delete/:no',(req,res)=>{
    console.log('/post/delete/:no')
    const no = req.params.no
    db.query(`delete from post where no=${no}`,(err,data)=>{
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