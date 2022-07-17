const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;

// 기본값 저장 (JSON 배열)
student_list = [
    {id:1, name: "김철수", major: "전자공학과"},
    {id:2, name: "이지영", major: "심리학과"},
    {id:3, name: "박수원", major: "컴퓨터공학과"},
    {id:4, name: "신미정", major: "간호학과"},
    {id:5, name: "노희민", major: "사학과"}
]

// root 값
app.get('/', (req, res)=> {
    res.send('root response')
})

// 정보 불러오기
app.get('/students', (req, res)=> {
    for (var i = 0; i < student_list.length ; i++) {
        console.log("id: " + student_list[i].id)
        console.log("name: " + student_list[i].name)
        console.log("major: " + student_list[i].major)
    }
    res.send('students information')
})

// 생성(추가) push, concat
app.get('/post/students/:id&:name&:major', (req, res)=> {
    const id = req.params.id
    const name = req.params.name
    const major = req.params.major

    var student_obj = {id:id, name:name, major:major}
    // 추가
    student_list = student_list.concat(student_obj)
    
    for (var i = 0; i < student_list.length ; i++) {
        if(id == student_list[i].id){
            console.log("id: " + student_list[i].id)
            console.log("name: " + student_list[i].name)
            console.log("major: " + student_list[i].major)
        }
    }
    res.send('post/students/:id&:name&:major')
})

// 조회(검색)
app.get('/students/:id', (req, res)=> {
    const id = req.params.id
    for (var i = 0; i < student_list.length ; i++) {
        if(id == student_list[i].id){
            console.log("id: " + student_list[i].id)
            console.log("name: " + student_list[i].name)
            console.log("major: " + student_list[i].major)
        }
    }
    res.send('/students/:id')
})

// 수정 
app.get('/put/students/:id&:name&:major', (req, res)=> {
    const id = req.params.id
    const name = req.params.name
    const major = req.params.major

    for (var i = 0; i < student_list.length ; i++) {
        if(id == student_list[i].id){
            student_list[i].name = name
            student_list[i].major = major
        }
    }

    for (var i = 0; i < student_list.length ; i++) { // 확인
        console.log("id: " + student_list[i].id)
        console.log("name: " + student_list[i].name)
        console.log("major: " + student_list[i].major)
    }
    res.send('/put/students/:id&:name&:major')
})

// 삭제 splice, filter
app.get('/delete/students/:id', (req, res)=> {
    const id = req.params.id

    student_list.splice(id-1, 1)

    for (var i = 0; i < student_list.length ; i++) { // 확인
        console.log("id: " + student_list[i].id)
        console.log("name: " + student_list[i].name)
        console.log("major: " + student_list[i].major)
    }
    res.send('/delete/students/:id')
})

// 값 불러오기
app.listen(PORT,()=>{
    console.log(`Server On: http://localhost:${PORT}`)
})
맨위로

