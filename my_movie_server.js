const express = require('express')
const app = express()
const PORT = process.env.PORT || 2000;

movie_list=[
    {id:1,title:'perl harbor'},
    {id:2,title:'lord of the rings'},
    {id:3,title:'top gun'}
]//JSON배열
app.get('/',(req,res)=>{
    res.send('root response')
})
app.get('/movies',(req,res)=>{
    for(var i=0; i<movie_list.length; i++){
        console.log('id:'+movie_list[i].id)
        console.log('title:'+movie_list[i].title)
    }
})
app.get('/movies/:id',(req,res)=>{
    const id=req.params.id
    for(var i=0; i<movie_list.length; i++){
        if(id==movie_list[i].id){
            console.log('id:'+movie_list[i].id)
            console.log('title:'+movie_list[i].title)
        }
    }
    res.send('/movies/:id')
})

app.get('/post/movies/:id&:title',(req,res)=>{ // 추가
    const id = req.params.id
    const title = req.params.title
    movie_list.push({id: id, title: title})
    
    //확인
    for(var i=0; i<movie_list.length; i++){
        console.log('id: '+movie_list[i].id)
        console.log('title: '+movie_list[i].title)
    }

    res.send('/post/movies/:id&:title')
})

app.get('/put/movies/:id&:title',(req,res)=>{ // 수정
    const id = req.params.id 
    const title = req.params.title
    
    for(var i=0; i<movie_list.length; i++){
        if(id==movie_list[i].id){
            movie_list[i].title = title
        }
    }

    for(var i=0; i<movie_list.length; i++){ // 확인
        console.log('id: '+movie_list[i].id)
        console.log('title: '+movie_list[i].title)
    }

    res.send('/put/movies/:id&:title')
})

app.get('/delete/movies/:id',(req,res)=>{
    const id = req.params.id 
    
    movie_list.splice(id-1,1)

    for(var i=0; i<movie_list.length; i++){ // 확인
        console.log('id: '+movie_list[i].id)
        console.log('title: '+movie_list[i].title)
    }

    res.send('/delete/movies/:id')
})



app.listen(PORT,()=>{
    console.log(`Server On: http://localhost:${PORT}`)
})
