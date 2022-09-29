
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import PostMain from './components/PostMain.js'
import PostWrite from './components/PostWrite.js'
import PostView from './components/PostView.js'
import Search from './components/Search.js'

// 번호, 제목, 작성자, 등록일, 첨부, 조회 , (글 내용)
// no, title, author, date, , hits, contents
// react-quill 이용해서 글쓰기 에디터 만들기! postWrite

// posts={posts}
// enrollPost={enrollPost}

// Search, SearchComp, server 수정하기!! (검색해서 결과 나오도록..)

function App() {

  return (
    <div id='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PostMain/>}/>
          <Route path='/postWrite' element={<PostWrite/>}/>
          <Route path='/postView' element={<PostView/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
