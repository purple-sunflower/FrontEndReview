
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import PostMain from './components/PostMain.js'
import PostWrite from './components/PostWrite.js'
import PostView from './components/PostView.js'
import { useEffect } from 'react';
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

  // useEffect(()=>{
  //   const addPost = async()=>{
  //     const result = await axios.post(`/board/add/${title}${contents}`)
  //   }
  // })

  const addPostInfo = (title, contents) =>{
    alert("추가! (app.js)")
    alert("추가 제목"+ title)
    alert("추가 내용"+ contents)

  }

  return (
    <div id='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PostMain/>}/>
          <Route path='/postWrite' element={<PostWrite/>}/>
          <Route path='/postView' element={<PostView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
