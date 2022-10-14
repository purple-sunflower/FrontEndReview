import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import PostMain from './components/PostMain.js'
import PostWrite from './components/PostWrite.js'
import PostView from './components/PostView.js'
import { useEffect, useState } from 'react';
import axios from 'axios';

// 번호, 제목, 작성자, 등록일, 첨부, 조회 , (글 내용)
// no, title, author, date, , hits, contents
// react-quill 이용해서 글쓰기 에디터 만들기! postWrite

// posts={posts}
// enrollPost={enrollPost}

// Search, SearchComp, server 수정하기!! (검색해서 결과 나오도록..)
// 검색컴포넌트 따로 쓰지 말고.. postMain에서 해결!!!!
// postView(게시물 넘버로 구분해서)

function App() {

  const enrollPost = (title, contents) => {
    alert("글 등록!(app.js)")
    alert("title: " + title)
    alert("contents: "+ contents)
    let myDate = new Date()
    // let year = myDate.getFullYear()
    // let month = myDate.getMonth()+1
    // let day= myDate.getDate()

    // if(month<10){
    //   month="0"+month
    // }
    // if(day<10){
    //   day="0"+day
    // }

    // let regDate = year+"-"+month+"-"+day
    const post = {title:title, contents:contents, author:'관리자', date:myDate}
    axiosEnrollPost(post)
  }

  const axiosEnrollPost = async(post) => {
    const res = await axios.post('/post/add/' + post)
    console.log('추가 결과', res)
  }

  return (
    <div id='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PostMain/>}/>
          <Route path='/postWrite' element={<PostWrite enrollPost={enrollPost}/>}/>
          <Route path='/postView' element={<PostView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;