import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import PostList from './components/PostList.js';
import Pagination from './components/Pagination.js'
// 번호, 제목, 작성자, 등록일, 첨부, 조회 , (글 내용)\
// no, title, author, date, , hits, contents


function App() {

  const [postList, setPostList] = useState([]);

  useEffect(()=>{
    const getPosts = async() =>{
      const result = await axios.get('/board')
      setPostList(result.data)
    }
    getPosts();
  })

  const [postPerPage, setPostPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const currentPostList=(postList)=>{
    const indexOfFirst = (currentPage-1)*postPerPage
    const indexOfLast = indexOfFirst+postPerPage
    const slicedPostList = postList.slice(indexOfFirst, indexOfLast)
    return slicedPostList;

  }

  return (
    <div id='app'>
      <PostList postList={currentPostList(postList)}/>
      <Pagination currentPage={currentPage} postPerPage={postPerPage} 
      total={postList.length} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
