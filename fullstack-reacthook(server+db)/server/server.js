const express = require('express');
const app = express();
const PORT = process.env.PORT || 2000;
const db = require('./config/db.js')
const bodyParser = require('body-parser');
const { prependOnceListener } = require('./config/db.js');
app.use(bodyParser.json())

app.get('/hello',(req,res)=>{
    console.log('/hello')
})

// 전체 조회 (날짜를 기준으로 내림차순 -> 최신 등록글이 맨 위로 오도록)
app.get('/post',(req,res)=>{
    console.log('/post')
    db.query("select * from post order by date desc",(err,data)=>{
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
app.post('/post/add/',(req,res)=>{
    console.log('/post/add/')
    const {title, contents, author, date} = req.body // req.*****body******
    // 숫자는 그 전 게시물 +1 (이거 구현 해야함 ㅠㅠㅠ ) 
    // 날짜는 오늘 날짜 들어가게.. (App에서 myDate 사용)
    db.query(`insert into post (no, title, contents, author, date, attach, hits) 
    values(24,"${title}","${contents}", "${author}", "${date}", 0, 0);`,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

//수정 (수정 눌렀을 때, title과 contents에 수정된 내용 들어가도록!)
app.put('/post/update/:no',(req,res)=>{
    console.log('/post/update/:no')
    const no = req.params.no
    const title = "수정 제목"
    const contents = "수정 내용"
    // const {title, contents} = req.body
    db.query(`update post set title="${title}", contents="${contents}" where no=${no}`,(err,data)=>{
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