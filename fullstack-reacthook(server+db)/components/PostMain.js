import { useState, useEffect } from 'react';
import '../css/PostMain.css';
import axios from 'axios';
import PostList from './PostList.js';
import Pagination from './Pagination.js'
import {Link} from 'react-router-dom';
// 번호, 제목, 작성자, 등록일, 첨부, 조회 , (글 내용)
// no, title, author, date, , hits, contents
// 글쓰기 router 사용 (postWrite)
// postlist를 postmain으로 옮기고
// app js에 라우터 써야할 듯!


function PostMain() {

  let [postList, setPostList] = useState([]);

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

  const lastPage = Math.ceil((postList.length)/postPerPage)

  return (
    <div id='postmain'>
      <span>총 게시물: {postList.length}   /</span>
      <span>   페이지 : {currentPage}/{lastPage}</span>
      <PostList postList={currentPostList(postList)}/>
      <button><Link to='/postWrite' id='postwrite_btn'>글쓰기</Link></button>
      <Pagination currentPage={currentPage} postPerPage={postPerPage} 
      total={postList.length} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default PostMain;
