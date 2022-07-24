const express = require('express');
const app = express();
const PORT = process.env.PORT || 1500;
const db = require('./config/db.js')

app.get('/hello',(req,res)=>{
    console.log('/hello')
})

//person
app.get('/person',(req,res)=>{
    console.log('/person')
    db.query("select * from person",(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})

app.get('/person/:name',(req,res)=>{
    const name=req.params.name
    console.log('/person/:name')
    console.log(name)
    db.query(`select * from person where name='${name}'`,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})

app.get('/person/insert/:name&:age&:height',(req,res)=>{
    const name=req.params.name
    const age=req.params.age
    const height=req.params.height
    console.log('/person/insert/:name&:age&:height')
    console.log(name)//김철수
    console.log(age)//30
    console.log(height)//177.6
    db.query(`insert into person(name,age,height) values('${name}',${age},${height})`,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})

app.get('/person/update/:name&:age',(req,res)=>{
    const name=req.params.name
    const age=req.params.age
    console.log('/person/update/:name&:age')
    console.log(name)
    console.log(age)
    db.query(`update person set age=${age} where name='${name}'`,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})

app.get('/person/delete/:name',(req,res)=>{
    const name=req.params.name
    console.log('/person/delete/:name')
    console.log(name)
    db.query(`delete from person where name='${name}'`,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})

// movie
app.get('/movie',(req,res)=>{ // 모두 조회
    console.log('/movie')
    db.query('select * from movie',(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})

app.get('/movie/:running',(req,res)=>{ // 조건 조회
    const running = req.params.running
    console.log('/movie/:running')
    db.query(`select * from movie where running >= ${running}`,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})

app.get('/movie/insert/:title&:director&:running',(req,res)=>{ // 추가
    const title = req.params.title
    const director = req.params.director
    const running = req.params.running
    console.log('/movie/insert/:title&:director&:running')
    db.query(`insert into movie(title,director,running) values('${title}','${director}',${running})`,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})

app.get('/movie/update/:title&:running',(req,res)=>{ // 수정
    const title = req.params.title
    const running = req.params.running
    console.log('/movie/update/:title&:running')
    db.query(`update movie set running =${running} where title = '${title}'`,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})

app.get('/movie/delete/:title',(req,res)=>{ // 삭제
    const title = req.params.title
    console.log('/movie/delete/:title')
    db.query(`delete from movie where title = '${title}'`,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})

// car
app.get('/car',(req,res) => { // 모두조회
    console.log('/car')
    db.query("select * from Car", (err, data) => {
        if(!err){
            console.log(data)
        }
        else{
            console.log(err)
        }
    })
})

app.get('/car/:name',(req,res) => { // 조건조회
    const name = req.params.name;
    console.log('/car/:name')
    db.query(`select * from Car where name = '${name}'`, (err, data) => {
        if(!err){
            console.log(data)
        }
        else{
            console.log(err)
        }
    })
})

app.get('/car/insert/:number&:name&:price',(req,res) => { // 추가
    const number = req.params.number;
    const name = req.params.name;
    const price = req.params.price;
    console.log('/car/insert/:number&:name&:price')
    db.query(`insert into Car(number, name, price) values(${number}, '${name}', ${price})`, (err, data) => {
        if(!err){
            console.log(data)
        }
        else{
            console.log(err)
        }
    })
})

app.get('/car/update/:name&:price',(req,res) => { // 수정
    const name = req.params.name;
    const price = req.params.price;
    console.log('/car/post/:name&:price')
    db.query(`update Car set price= ${price} where name ='${name}'`, (err, data) => {
        if(!err){
            console.log(data)
        }
        else{
            console.log(err)
        }
    })
})

app.get('/car/delete/:name',(req,res) => { // 삭제
    const name = req.params.name;
    console.log('/car/delete/:name')
    db.query(`delete from Car where name ='${name}'`, (err, data) => {
        if(!err){
            console.log(data)
        }
        else{
            console.log(err)
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})