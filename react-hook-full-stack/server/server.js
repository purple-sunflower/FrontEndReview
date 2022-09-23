const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/hello',(req,res)=>{
    console.log('/hello')
})

app.get('/person',(req,res)=>{
    console.log('/person')
    db.query("select * from person",(err,data)=>{
        if(!err){
            //console.log(data)
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

app.post('/add/person',(req,res)=>{
    console.log('/add/person')
    console.log(req.body)
    const name=req.body.name
    const age=req.body.age
    const height=req.body.height
    
    db.query(`insert into person(name,age,height) values('${name}',${age},${height})`,(err,data)=>{
        if(!err){
            //console.log(data)
            res.send(data)
        }else{
            console.log(err)
        }
    })

})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})