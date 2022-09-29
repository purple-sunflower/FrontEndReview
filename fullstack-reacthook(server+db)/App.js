
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PostMain from './components/PostMain.js'
// 번호, 제목, 작성자, 등록일, 첨부, 조회 , (글 내용)
// no, title, author, date, , hits, contents
// 글쓰기 router 사용 (postWrite)
// postlist를 postmain으로 옮기고
// app js에 라우터 써야할 듯!


function App() {

  return (
    <div id='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PostMain/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;