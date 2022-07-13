const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('root response')
})

app.get('/api/movie1/:title', (req, res)=> {
    console.log(req.params)
    console.log(req.params.title)
    const title = req.params.title
    res.send('영화 제목: ' + title)
})

app.get('/api/movie2/:title&:director', (req, res)=> {
    console.log(req.params)
    console.log(req.params.title)
    const title = req.params.title
    console.log(req.params.director)
    const director = req.params.director
    res.send('영화 제목: ' + title + ' 감독: ' + director)
})

app.get('/api/movie3/:title&:director&:running', (req, res)=> {
    console.log(req.params)
    console.log(req.params.title)
    const title = req.params.title
    console.log(req.params.director)
    const director = req.params.director
    console.log(req.params.running_time)
    const running = req.params.running_time
    res.send('영화 제목: ' + title + ' 감독: ' + director + ' 러닝타임: ' + running)
})

app.listen(PORT,()=>{
    console.log(`Server On: http://localhost:${PORT}`)
})